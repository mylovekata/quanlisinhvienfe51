var SinhVienService = function(){
    //Phương thức giao tiếp BACKEND qua qpi => lấy thông tin sinh viên từ server
    this.layDanhSachSinhVien = function (){
        var promise = axios (
            {
                url:`http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien`,// đường dẫn backend cung cấp để lấy hoặc thêm dữ liệu
                method: 'GET' // giao thức backend cung cấp
            }
        ) ;
        return promise;
    }
    this.xoaSinhVien = function (maSinhVien){
        var promise = axios (
            {
                url:`http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=${maSinhVien}`,// đường dẫn backend cung cấp để lấy hoặc thêm dữ liệu
                method: 'DELETE' // giao thức backend cung cấp
            }
        ) ;
        return promise;
    }
    this.layThongTinSinhVien= function (maSinhVien){
        var promise = axios (
            {
                url:`http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=${maSinhVien}`,// đường dẫn backend cung cấp để lấy hoặc thêm dữ liệu
                method: 'GET' // giao thức backend cung cấp
            }
        ) ;
        return promise;
   
        }   
        this.capNhapThongTinSinhVien= function (maSinhVien,sinhVienUpdate){
        var promise = axios (
            {
                url:`http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=${maSinhVien}`,// đường dẫn backend cung cấp để lấy hoặc thêm dữ liệu
                method: 'PUT', // giao thức backend cung cấp
                data:sinhVienUpdate
            }
        ) ;
        return promise;
   
    }
}