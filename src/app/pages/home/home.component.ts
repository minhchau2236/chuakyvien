import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  public href: string = "";
  constructor() { }

  ngOnInit() {
    this.href = window.location.href;
  }

}
