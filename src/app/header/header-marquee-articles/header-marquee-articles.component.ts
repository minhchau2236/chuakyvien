import { Component, OnInit } from '@angular/core';
import { OnlineService } from '../../services/online.service';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-header-marquee-articles',
  templateUrl: './header-marquee-articles.component.html',
  styleUrls: []
})
export class HeaderMarqueeArticlesComponent implements OnInit {
  articles: Article[] = [];
  constructor(private onlineService: OnlineService) { }

  ngOnInit() {
    this.onlineService.srvArticleBelongTopic("all", 0, 5)
      .subscribe(
        res => {
          this.articles = JSON.parse(res['_body']);
        },
        err => console.log(err)
      )
  }

}
