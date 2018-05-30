import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { OnlineService } from './services/online.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PannelLeftComponent } from './pannel-left/pannel-left.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleDisplayComponent } from './pages/article-display/article-display.component';
import { TopicDisplayComponent } from './pages/topic-display/topic-display.component';
import { PhotoAlbumsComponent } from './pages/photo-albums/photo-albums.component';
import { PhotoDisplayComponent } from './pages/photo-display/photo-display.component';
import { VideoDisplayComponent } from './pages/video-display/video-display.component';
import { VideoAlbumsComponent } from './pages/video-albums/video-albums.component';
import { BookCollectionsComponent } from './pages/book-collections/book-collections.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { HeaderTopComponent } from './header/header-top/header-top.component';
import { HeaderContainComponent } from './header/header-contain/header-contain.component';
import { HorizontalMenuComponent } from './header/horizontal-menu/horizontal-menu.component';
import { HeaderMarqueeArticlesComponent } from './header/header-marquee-articles/header-marquee-articles.component';
import { HeaderSearchComponent } from './header/header-search/header-search.component';
import { VerticalMenuComponent } from './pannel-left/vertical-menu/vertical-menu.component';
import { FooterContainComponent } from './footer/footer-contain/footer-contain.component';
import { FooterAddressComponent } from './footer/footer-address/footer-address.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeIntroduceVideoComponent } from './pages/home/home-introduce-video/home-introduce-video.component';
import { HomeTopic1Component } from './pages/home/home-topic1/home-topic1.component';
import { HomeTopic2Component } from './pages/home/home-topic2/home-topic2.component';
import { LeftTopic1Component } from './pannel-left/left-topic1/left-topic1.component';
import { TopicDisplayItemComponent } from './pages/topic-display/topic-display-item/topic-display-item.component';
import { ArticleDisplayRelativeComponent } from './pages/article-display/article-display-relative/article-display-relative.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminArticleComponent } from './admin/admin-article/admin-article.component';
import { PhotoItemComponent } from './pages/photo-display/photo-item/photo-item.component';
import { ListTopicComponent } from './pages/list-topic/list-topic.component';
import { HomeIntroduceVideoListComponent } from './pages/home/home-introduce-video/home-introduce-video-list/home-introduce-video-list.component';
import { VideoListComponent } from './pages/video-list/video-list.component';
import { ThapLinhCotComponent } from './pages/thap-linh-cot/thap-linh-cot.component';
import { ThapLinhCot } from './models/thaplinhcot.model';

const routesConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list-topic', component: ListTopicComponent },
  { path: 'topic', component: TopicDisplayComponent },
  { path: 'article', component: ArticleDisplayComponent },
  { path: 'photo-album', component: PhotoAlbumsComponent },
  { path: 'photo-display', component: PhotoDisplayComponent },
  { path: 'video-album', component: VideoAlbumsComponent },
  { path: 'video-display', component: VideoDisplayComponent },
  { path: 'video-list', component: VideoListComponent },
  { path: 'book-collection', component: BookCollectionsComponent },
  { path: 'book-detail', component: BookDetailComponent },
  { path: 'thap-linh-cot', component: ThapLinhCotComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/article', component: AdminArticleComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PannelLeftComponent,
    HomeComponent,
    ArticleDisplayComponent,
    TopicDisplayComponent,
    PhotoAlbumsComponent,
    PhotoDisplayComponent,
    VideoDisplayComponent,
    VideoAlbumsComponent,
    BookCollectionsComponent,
    BookDetailComponent,
    HeaderTopComponent,
    HeaderContainComponent,
    HorizontalMenuComponent,
    HeaderMarqueeArticlesComponent,
    HeaderSearchComponent,
    VerticalMenuComponent,
    FooterContainComponent,
    FooterAddressComponent,
    PageNotFoundComponent,
    ContactComponent,
    HomeIntroduceVideoComponent,
    HomeTopic1Component,
    HomeTopic2Component,
    LeftTopic1Component,
    TopicDisplayItemComponent,
    ArticleDisplayRelativeComponent,
    AdminComponent,
    AdminHeaderComponent,
    AdminArticleComponent,
    PhotoItemComponent,
    ListTopicComponent,
    HomeIntroduceVideoListComponent,
    VideoListComponent,
    ThapLinhCotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routesConfig)
  ],
  providers: [OnlineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
