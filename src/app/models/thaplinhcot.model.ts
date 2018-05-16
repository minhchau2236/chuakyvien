export class ThapLinhCot {
    public Success: boolean;
    public Message: string;
    public Ma: string;
    public Ten: string;
    public ViTri: string;

    constructor(ma: string, ten: string, vitri: string) {
        this.Ma = ma;
        this.Ten = ten;
        this.ViTri = vitri;
    }
}