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
  topicId: string = "";

  itemsPerPage: number = 12;
  currentPage: number = 1;
  totalPages: number;

  constructor(private onlineService: OnlineService,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.topicId = params['id'];
      this.onlineService.srvTopicDetail(this.topicId)
        .subscribe(
          res => {
            this.topic = JSON.parse(res['_body']);
          },
          err => console.log(err)
        )
      this.getArticles();
    });
  }

  ngOnInit() {
    console.log(this.articles);
  }

  pageChanged(event) {
    this.itemsPerPage = event.itemsPerPage;
    this.currentPage = event.page;
    this.getArticles();
  }

  getArticles() {
    this.articles = [];
    let index = (this.currentPage - 1) * this.itemsPerPage;
    this.onlineService.srvArticleBelongTopic(this.topicId, index, this.itemsPerPage)
      .subscribe(
        res => {
          this.articles = JSON.parse(res['_body']);
          if (this.articles.length > 0) {
            let totalArticles = this.articles[0].TotalArticles;
            this.totalPages = Math.floor((totalArticles / this.itemsPerPage) + (totalArticles % this.itemsPerPage == 0 ? 0 : 1));
          }
        },
        err => console.log(err)
      )
  }
}
