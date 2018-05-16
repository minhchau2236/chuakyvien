import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../../models/article.model';

@Component({
  selector: 'app-topic-display-item',
  templateUrl: './topic-display-item.component.html',
  styleUrls: []
})
export class TopicDisplayItemComponent implements OnInit {

  @Input() article: Article;
  
  constructor() { }

  ngOnInit() {
  }

}
