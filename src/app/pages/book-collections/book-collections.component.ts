import { Component, OnInit } from '@angular/core';
import { OnlineService } from '../../services/online.service';
import { BookCollection, Book } from '../../models/book.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-collections',
  templateUrl: './book-collections.component.html',
  styleUrls: []
})
export class BookCollectionsComponent implements OnInit {
  collections: BookCollection[] = [];
  collection: BookCollection = new BookCollection("", "Chọn tủ sách cần xem");
  books: Book[] = [];

  constructor(private onlineService: OnlineService,
    private activatedRoute: ActivatedRoute) {
    this.onlineService.srvBookCollectionGetAll()
      .subscribe(
        res => {
          this.collections = JSON.parse(res['_body']);
        },
        err => console.log(err)
      )

    this.activatedRoute.queryParams.subscribe(params => {
      let collectionId = params['col'];
      this.onlineService.srvBookCollectionDetail(collectionId)
        .subscribe(
          res => {
            this.collection = JSON.parse(res['_body']);
          },
          err => console.log(err)
        )
      this.onlineService.srvBookSearch(collectionId, "")
        .subscribe(
          res => {
            this.books = JSON.parse(res['_body']);
          },
          err => console.log(err)
        )
    });
  }

  ngOnInit() {
  }

  search(collectionId: string) {
    this.books = [];
    this.onlineService.srvBookCollectionDetail(collectionId)
      .subscribe(
        res => {
          this.collection = JSON.parse(res['_body']);
        },
        err => console.log(err)
      )
    this.onlineService.srvBookSearch(collectionId, "")
      .subscribe(
        res => {
          this.books = JSON.parse(res['_body']);
        },
        err => console.log(err)
      )
  }
}
