import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: []
})
export class QuestionAnswerComponent implements OnInit {
  public href: string = "";
  constructor() { }

  ngOnInit() {
    this.href = window.location.href;
  }

}
