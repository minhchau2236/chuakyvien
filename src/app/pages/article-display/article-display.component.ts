import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Params } from '@angular/router'
import { OnlineService } from '../../services/online.service';
import { Article } from '../../models/article.model';
import { ResResult } from '../../types';

@Component({
  selector: 'app-article-display',
  templateUrl: './article-display.component.html',
  styleUrls: []
})
export class ArticleDisplayComponent implements OnInit {

  public href: string = "";
  public article: Article = new Article("", "", "", "Đang tải", "", "", "");

  constructor(private onlineService: OnlineService,
    private activatedRoute: ActivatedRoute) {
      this.activatedRoute.queryParams.subscribe(params => {
        let articleId = params['id'];
        this.onlineService.srvArticleDetail(articleId)
          .subscribe(
            res => {
              this.article = JSON.parse(res['_body']);
            },
            err => console.log(err)
          )
      });
   }

  ngOnInit() {
    this.href = window.location.href;
  }
}
