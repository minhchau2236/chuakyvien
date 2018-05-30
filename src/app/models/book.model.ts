export class BookCollection {
    public Success: boolean;
    public Message: string;
    public CollectionId: string;
    public CollectionName: string;
    public CollectionUrl: string;

    constructor(id: string, name: string) {
        this.CollectionId = id;
        this.CollectionName = name;
    }
};
export class Book {
    public Success: boolean;
    public Message: string;
    public BookId: string;
    public CollectionId: string;
    public CollectionName: string;
    public CollectionUrl: string;
    public BookUrl: string;
    public Title: string;
    public Author: string;
    public Publisher: string;
    public PublishYear: string;
    public PublishPlace: string;
    public Sumarize: string;
    public Pages: string;
    public Language: string;
    public BookOrder: number;
    public CreatedDate: any;
    public CreatedBy: string;

    constructor(id: string, title: string) {
        this.BookId = id;
        this.Title = title;
    }
}