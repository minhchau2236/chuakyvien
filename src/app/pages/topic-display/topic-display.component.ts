import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { OnlineService } from '../../services/online.service';
import { Article } from '../../models/article.model';
import { Topic } from '../../models/topic.model';

@Component({
  selector: 'app-topic-display',
  templateUrl: './topic-display.component.html',
  styleUrls: []
})
export class TopicDisplayComponent implements OnInit {
  topic: Topic = new Topic("", "", "Đang lấy thông tin", "");
  articles: Article[] = [];
  
  constructor(private onlineService: OnlineService,
    private activatedRoute: ActivatedRoute) {
      this.activatedRoute.queryParams.subscribe(params => {
        let topicId = params['id'];
        this.onlineService.srvTopicDetail(topicId)
          .subscribe(
            res => {
              this.topic = JSON.parse(res['_body']);
            },
            err => console.log(err)
          )
        this.onlineService.srvArticleBelongTopic(topicId, 0, 12)
          .subscribe(
            res => {
              this.articles = JSON.parse(res['_body']);
            },
            err => console.log(err)
          )
      });
   }

  ngOnInit() {
    console.log(this.articles);
  }

}
