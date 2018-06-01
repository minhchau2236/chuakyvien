import { Component, OnInit } from '@angular/core';
import { Article } from '../../../models/article.model';
import { OnlineService } from '../../../services/online.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-display-relative',
  templateUrl: './article-display-relative.component.html',
  styleUrls: []
})
export class ArticleDisplayRelativeComponent implements OnInit {
  articles: Article[] = [];
  itemsPerPage: number = 12;
  currentPage: number = 1;
  totalPages: number;
  articleId: string = '';

  constructor(private onlineService: OnlineService,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.articleId = params['id'];
      this.getRelatedArticle();
    });
  }

  ngOnInit() { }

  pageChanged(event) {
    this.itemsPerPage = event.itemsPerPage;
    this.currentPage = event.page;
    this.getRelatedArticle();
  }

  getRelatedArticle() {
    this.articles = [];
    let index = (this.currentPage - 1) * this.itemsPerPage;
    this.onlineService.srvArticleGetRelated(this.articleId, index, this.itemsPerPage)
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
