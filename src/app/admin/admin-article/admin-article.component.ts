import { Component, OnInit } from '@angular/core';
import { Topic } from '../../models/topic.model';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-admin-article',
  templateUrl: './admin-article.component.html',
  styleUrls: []
})
export class AdminArticleComponent implements OnInit {

  topics: Topic[] = [
    new Topic("1697EA1D-4B3D-4D54-8F0E-568D7F00E668", "tu-thien", "Từ thiện", ""),
    new Topic("2FB8C13D-0011-477F-9D70-713DB72462B8", "phong-su-anh", "Phóng sự ảnh", ""),
    new Topic("365B1214-4215-4E2A-B457-72EFE9566B1F", "khanh-hoa", "Khánh Hòa", ""),
    new Topic("50992EB3-081E-4213-8452-407BB491683E", "trang-chu", "Trang chủ", ""),
    new Topic("528CFFF4-D42C-481A-AF09-21EB971CE7AC", "tin-tuc-1", "Tin tức", ""),
    new Topic("7A9A7E9C-CF92-46F2-AF21-724FAD2BCC93", "loi-phat-day", "Lời phật dạy", ""),
    new Topic("9D8179C4-2DBE-4EF8-BB6B-15E51FDB2558", "sach", "Sách", ""),
    new Topic("9EAAF362-7300-434E-ADC2-6591D66BF8F6", "tham-luan", "Tham luận", ""),
    new Topic("A9F166AB-5E55-4DD8-8248-C91C06D80F61", "van-hoa", "Văn hóa", ""),
    new Topic("DF7FAEF0-3909-4B80-AA88-CE577C2E10FA", "tin-tuc-2", "Tin tức", ""),
    new Topic("E8A15458-CAA7-452B-8765-BF4F781A8B12", "van-de-quan-tam", "Vấn đề quan tâm", ""),
    new Topic("F030A81A-C71C-4CC0-B269-48A7CCB99878", "nghien-cuu", "Nghiên cứu", ""),
    new Topic("F305F649-98EC-46F9-B390-074A87FA4AC4", "chua-viet", "Chùa Việt", ""),
    new Topic("F40934B1-0647-4CD1-A061-C19D9D787792", "tin-dia-phuong", "Tin địa phương", ""),
  ];

  articles: Article[] = [
    new Article("1", "bai-viet-1", "Tiêu đề của Bài viết số 1", "", "", "", "1"),
    new Article("2", "bai-viet-2", "Tiêu đề của Bài viết số 2", "", "", "", "1"),
    new Article("3", "bai-viet-3", "Tiêu đề của Bài viết số 3", "", "", "", "1"),
    new Article("4", "bai-viet-4", "Tiêu đề của Bài viết số 4", "", "", "", "1"),
    new Article("5", "bai-viet-5", "Tiêu đề của Bài viết số 5", "", "", "", "2")
  ];
  constructor() { }

  ngOnInit() {
  }

}
