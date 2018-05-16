export class Article {
    public Success: boolean;
    public Message: string;
    public RowNumber: number;
    public ArticleId: string;
    public ArticleUrl: string;
    public ArticleName: string;
    public ArticleTitle: string;
    public ArticleDescription: string;
    public ArticleContent: string;
    public ArticleStatus: number;
    public ArticleOrder: number;
    public TopicId: string;
    public ViewTime: number;
    public CreatedDate: any;
    public CreatedBy: string;
    public ModifiedDate: any;
    public ModifiedBy: string;
    public TotalArticles: number;

    constructor(id: string, url: string, name: string, title: string, desc: string, content: string, topicId: string) {
        this.ArticleId = id;
        this.ArticleUrl = url;
        this.ArticleName = name;
        this.ArticleTitle = title;
        this.ArticleDescription = desc;
        this.ArticleContent = content;
        this.TopicId = topicId;
    }
}