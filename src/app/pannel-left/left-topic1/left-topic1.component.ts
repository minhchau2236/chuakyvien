import { Component, OnInit, Input } from '@angular/core';
import { OnlineService } from '../../services/online.service';
import { Article } from '../../models/article.model';
import { Topic } from '../../models/topic.model';

@Component({
  selector: 'app-left-topic1',
  templateUrl: './left-topic1.component.html',
  styleUrls: []
})
export class LeftTopic1Component implements OnInit {
  @Input() topicId;
  topic: Topic = new Topic("", "", "Đang lấy thông tin", "");
  articles: Article[] = [];

  constructor(private onlineService: OnlineService) { }

  ngOnInit() {
    this.onlineService.srvTopicDetail(this.topicId)
      .subscribe(
        res => {
          
          this.topic = JSON.parse(res['_body']);
        },
        err => console.log(err)
      );
    this.onlineService.srvArticleBelongTopic(this.topicId, 0, 6)
      .subscribe(
        res => {
          this.articles = JSON.parse(res['_body']);
        },
        err => console.log(err)
      )
  }

  filterFirstArticle() {
    return this.articles.filter(x => x.RowNumber == 1);
  }

}
