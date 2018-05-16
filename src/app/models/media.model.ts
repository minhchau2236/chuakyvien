export class MediaAlbum {
    public Success: boolean;
    public Message: string;
    public AlbumId: string;
    public AlbumUrl: string;
    public AlbumName: string;
    public MediaType: string;
    public CreatedDate: any;
    public CreatedBy: string;
    public MediaAvatar: string;

    constructor(id: string, url: string, name: string, coverMediaId: string) {
        this.AlbumId = id;
        this.AlbumUrl = url;
        this.AlbumName = name;
        this.MediaAvatar = coverMediaId;
    }
};

export class Media {
    public Success: boolean;
    public Message: string;
    public RowNumber: number;
    public MediaId: string;
    public AlbumId: string;
    public MediaName: string;
    public MediaUrl: string;
    public MediaDescription: string;
    public MediaAuthor: string;
    public MediaOrder: number;
    public CreatedDate: any;
    public CreatedBy: string;
    public TotalMedias: number;

    constructor(id: string, url: string, name: string, desc: string, order: number) {
        this.MediaId = id;
        this.MediaUrl = url;
        this.MediaName = name;
        this.MediaDescription = desc;
        this.MediaOrder = order;
    }
}