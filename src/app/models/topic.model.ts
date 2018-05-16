export class Topic {
    public Success: boolean;
    public Message: string;
    public TopicId: string;
    public TopicUrl: string;
    public TopicName: string;
    public TopicParent: string;
    public CreatedDate: any;
    public CreatedBy: string;

    constructor(id: string, url: string, name: string, parentId: string) {
        this.TopicId = id;
        this.TopicUrl = url;
        this.TopicName = name;
        this.TopicParent = parentId;
    }
}