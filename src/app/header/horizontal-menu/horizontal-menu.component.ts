import { Component, OnInit } from '@angular/core';
import { BookCollection } from '../../models/book.model';
import { OnlineService } from '../../services/online.service';

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: []
})
export class HorizontalMenuComponent implements OnInit {
  bookcollections: BookCollection[] = [];

  constructor(private onlineService: OnlineService) {
    this.onlineService.srvBookCollectionGetAll()
      .subscribe(
        res => {
          this.bookcollections = JSON.parse(res['_body']);
        },
        err => console.log(err)
      )
  }

  ngOnInit() {
  }

}
