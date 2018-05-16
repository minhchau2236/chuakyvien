import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class OnlineService {
    serverUrl = "http://chuakyvientrungnghia.com.vn/";

    constructor(private http: Http) {}
    
    //Article
    srvArticleDetail(url: string) {
        return this.http.get(`${this.serverUrl}api/Article/Detail?url=${url}`);
    }

    srvArticleBelongTopic(topic: string, index: number, count: number) {
        return this.http.get(`${this.serverUrl}api/Article/GetByTopic?topic=${topic}&index=${index}&count=${count}`);
    }

    //Topic
    srvTopicGetAll() {
        return this.http.get(`${this.serverUrl}api/Topic/GetAll`);
    }

    srvTopicDetail(url: string) {
        return this.http.get(`${this.serverUrl}api/Topic/Detail?url=${url}`);
    }

    //Album
    srvAlbumGetByType(type: string) {
        return this.http.get(`${this.serverUrl}api/Album/GetByType?type=${type}`);
    }

    srvAlbumDetail(url: string) {
        return this.http.get(`${this.serverUrl}api/Album/Detail?url=${url}`);
    }

    //Media
    srvMediaGetByAlbum(url: string, index: number, count: number) {
        return this.http.get(`${this.serverUrl}api/Media/GetByAlbum?album=${url}&index=${index}&count=${count}`);
    }

    srvMediaDetail(url: string) {
        return this.http.get(`${this.serverUrl}api/Media/Detail?url=${url}`);
    }

    srvMediaNewByType(type: string) {
        return this.http.get(`${this.serverUrl}api/Media/New?type=${type}`);
    }

    //ThapLinhCot
    srvThapLinhCotGetAll() {
        return this.http.get(`${this.serverUrl}api/ThapLinhCot/GetAll`);
    }

    srvThapLinhCotDetail(id: string) {
        return this.http.get(`${this.serverUrl}api/ThapLinhCot/Detail?id=${id}`);
    }

    //OLinhCot
    srvOLinhCotSearch(thap: string, search: string) {
        return this.http.post(`${this.serverUrl}api/OLinhCot/Search`, { "Thap": thap, "Search": search });
    }

    srvOLinhCotGetEmpty() {
        return this.http.get(`${this.serverUrl}api/OLinhCot/GetEmpty`);
    }
}