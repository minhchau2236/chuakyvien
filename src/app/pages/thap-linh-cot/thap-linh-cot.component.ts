import { Component, OnInit } from '@angular/core';
import { ThapLinhCot } from '../../models/thaplinhcot.model';
import { OnlineService } from '../../services/online.service';
import { OLinhCot } from '../../models/olinhcot.model';

@Component({
  selector: 'app-thap-linh-cot',
  templateUrl: './thap-linh-cot.component.html',
  styleUrls: []
})
export class ThapLinhCotComponent implements OnInit {
  towers: ThapLinhCot[] = [];
  thaplinhcot: ThapLinhCot = new ThapLinhCot("", "Chọn tháp muốn xem", "");
  towerCells: OLinhCot[] = [];

  constructor(private onlineService: OnlineService) {
    this.onlineService.srvThapLinhCotGetAll()
      .subscribe(
        res => {
          this.towers = JSON.parse(res['_body']);
        },
        err => console.log(err)
      )
  }

  ngOnInit() {
  }

  search(maThap: string) {
    this.towerCells = [];
    this.onlineService.srvThapLinhCotDetail(maThap)
      .subscribe(
        res => {
          this.thaplinhcot = JSON.parse(res['_body']);
        },
        err => console.log(err)
      )
    this.onlineService.srvOLinhCotSearch(maThap, "")
      .subscribe(
        res => {
          this.towerCells = JSON.parse(res['_body']);
        },
        err => console.log(err)
      )
  }

  onKeyUpOLinhCot(event) {
    if (event.keyCode == 13) {
      this.towerCells = [];
      let searchValue = event.target.value;
      this.thaplinhcot = new ThapLinhCot("ALL", "Tìm trong tất cả tháp", "");
      this.onlineService.srvOLinhCotSearch("ALL", searchValue)
      .subscribe(
        res => {
          this.towerCells = JSON.parse(res['_body']);
        },
        err => console.log(err)
      )
    }
  }

  checkEmptyCell() {
    this.towerCells = [];
    this.thaplinhcot = new ThapLinhCot("ALL", "Tìm trong tất cả tháp", "");
    this.onlineService.srvOLinhCotGetEmpty()
      .subscribe(
        res => {
          this.towerCells = JSON.parse(res['_body']);
        },
        err => console.log(err)
      )
  }

}
