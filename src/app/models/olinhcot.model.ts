export class OLinhCot {
    public Success: boolean;
    public Message: string;
    public Ma: string;
    public MaThap: string;
    public TenThap: string;
    public OSo: string;
    public MaNguoiDangKy: string;
    public TenHuongLinh: string;
    public PhapDanh: string;
    public GioiTinh: number;
    public GioiTinhText: string;
    public NgaySinh: string;
    public NgayMat: string;
    public AmLich: string;
    public Tuoi: number
    public ThongTinPhungLap: string;
    public ThongTinLienHe: string;
    public NgayLuuTru: any;
    public NgayTao: any;
    public NguoiTao: string;
    public NgayDangKy: any;
    public NguoiDangKy: string;

    constructor(ma: string, ten: string) {
        this.Ma = ma;
        this.TenHuongLinh = ten;
    }
}