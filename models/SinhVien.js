var SinhVien = function(masv,tensv,email,diemtoan,diemli,diemhoa,diemrenluyen,loaisinhvien){//lớp đối tượng sinh viên
    this.maSinhVien=masv;// các thuộc tính của class sinh viên
    this.tenSinhVien=tensv;
    this.email=email;
    this.diemToan=diemtoan;
    this.diemLi=diemli;
    this.diemHoa=diemli;
    this.diemRenLuyen=diemrenluyen;
    this.loaiSinhVien=loaisinhvien;
    
    this.tinhDiemTrungBinh = function(){
        return (Number( this.diemToan)+Number( this.diemLi)+Number( this.diemHoa))/3;   
    }

}