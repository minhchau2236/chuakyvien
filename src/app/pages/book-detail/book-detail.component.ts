import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { OnlineService } from '../../services/online.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: []
})
export class BookDetailComponent implements OnInit {
  public href: string = "";
  book:Book = new Book("", "");

  constructor(private onlineService: OnlineService,
    private activatedRoute: ActivatedRoute) {
      this.activatedRoute.queryParams.subscribe(params => {
        let id = params['id'];
        this.onlineService.srvBookDetail(id)
          .subscribe(
            res => {
              this.book = JSON.parse(res['_body']);
            },
            err => console.log(err)
          )
      });
    }

  ngOnInit() {
    this.href = window.location.href;
  }

}
