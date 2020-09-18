//khai báo service
var svService = new SinhVienService ();

var layThongTinSinhVien = function(){
    var promise = svService.layDanhSachSinhVien();
    promise.then(function(result){
        var content = '';
        //từ dữ liệu table
        for(var i=0;i<result.data.length;i++){
            //lấy ra từng sinh viên từ kết quả server trả về
            var sv = result.data[i];
            //tạo đối tượng sinh viên chứa dữ liệu đó
            var sinhVien = new SinhVien();
            sinhVien.maSinhVien = sv.maSinhVien;
            sinhVien.tenSinhVien = sv.tenSinhVien;
            sinhVien.email=sv.email;
            sinhVien.diemToan = sv.diemToan;
            sinhVien.diemHoa = sv.diemHoa;
            sinhVien.diemLi = sv.diemLi;
            sinhVien.loaiSinhVien = sv.loaiSinhVien;
            sinhVien.diemRenLuyen = sv.diemRenLuyen;
    
            content += `<tr>
                <td>${sinhVien.maSinhVien}</td>
                
                <td>${sinhVien.tenSinhVien}</td>
                
                <td>${sinhVien.email}</td>
                
                <td>${sinhVien.loaiSinhVien}</td>
    
                <td>${sinhVien.tinhDiemTrungBinh().toFixed(2)}</td>
                
                <td>${sinhVien.diemRenLuyen}</td>
                <td><button class="btn btn-danger" onclick="xoaSinhVien('${sinhVien.maSinhVien}')" >Xóa</button></td>
                <td><button class="btn btn-info" onclick="chinhSua('${sinhVien.maSinhVien}')" >Chỉnh Sửa</button></td>
            </tr>`
        }
        document.getElementById('tblSinhVien').innerHTML = content;
    }).catch(function(err){
        console.log(err.response.data); 
})
}
layThongTinSinhVien();




// console.log(axios)


// tạo ra 1 object chứa các thông tin backend cung cấp
// var objectGetSinhVien = {
//     url:'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien',// đường dẫn backend cung cấp để lấy hoặc thêm dữ liệu
//     method: 'GET' // giao thức backend cung cấp
// }
// // dùng thư viện axios gửi yêu cầu đến server

// var promise = axios(objectGetSinhVien);

// var layDuLieuThanhCong = function(result){//hàm xử lí khi trả về kết quả thành công
//     console.log(result.data);
//     var content = '';
//     //từ dữ liệu table
//     for(var i=0;i<result.data.length;i++){
//         //lấy ra từng sinh viên từ kết quả server trả về
//         var sv = result.data[i];
//         //tạo đối tượng sinh viên chứa dữ liệu đó
//         var sinhVien = new SinhVien();
//         sinhVien.maSinhVien = sv.maSinhVien;
//         sinhVien.tenSinhVien = sv.tenSinhVien;
//         sinhVien.email=sv.email;
//         sinhVien.diemToan = sv.diemToan;
//         sinhVien.diemHoa = sv.diemHoa;
//         sinhVien.diemLi = sv.diemLi;
//         sinhVien.loaiSinhVien = sv.loaiSinhVien;
//         sinhVien.diemRenLuyen = sv.diemRenLuyen;

//         content += `<tr>
//             <td>${sv.maSinhVien}</td>
            
//             <td>${sv.tenSinhVien}</td>
            
//             <td>${sv.email}</td>
            
//             <td>${sv.loaiSinhVien}</td>

//             <td>${sinhVien.tinhDiemTrungBinh().toFixed(2)}</td>
            
//             <td>${sv.diemRenLuyen}</td>
//             <td><button class="btn btn-danger" onclick="xoaSinhVien('${sinhVien.maSinhVien}')" >Xóa</button></td>
//         </tr>`
//     }
//     document.getElementById('tblSinhVien').innerHTML = content;

// }
// var layDuLieuThatBai = function(err){//hàm xử lí khi trả về kết quả thành công
//     console.log(err.response.data);
// }
// // Phương thức then(callback): nhận vào 1 hàm có 1 tham số là kết quả trả về thành công từ phía server
// // phương thức .catch(callback): nhận vào 1 hàm có 1 tham số là kết quả trả a về từ phía server thất bai (trả lỗi)
// promise.then(layDuLieuThanhCong).catch(layDuLieuThatBai);

//-------------Post: chức năng thêm sinh viên vào server-----------
document.getElementById('btnThemSinhVien').onclick = function ()
{
    //lấy thông tin người dùng nhập vào từ giao diện
    var  sv= new SinhVien();
    sv.maSinhVien = document.getElementById('maSinhVien').value;
    sv.tenSinhVien = document.getElementById('tenSinhVien').value;
    sv.email = document.getElementById('email').value;
    sv.diemToan = document.getElementById('diemToan').value;
    sv.diemLi = document.getElementById('diemLi').value;
    sv.diemHoa = document.getElementById('diemHoa').value;
    sv.diemRenLuyen = document.getElementById('diemRenLuyen').value;
    console.log('sinhVien',sv);

    //Tạo ra object backend cần
    //var objectModel = 
        // {
        //     "maSinhVien": 0,
        //     "tenSinhVien": "string",
        //     "loaiSinhVien": "string",
        //     "diemToan": 0,
        //     "diemLy": 0,
        //     "diemHoa": 0,
        //     "diemRenLuyen": 0,
        //     "email": "string"
        //   }

        axios({
            url:'http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien',// đường dẫn backend cung cấp để lấy hoặc thêm dữ liệu
            method: 'POST', // giao thức backend cung cấp
            data:sv // theo định dạng BE yêu cầu
        }).then(function(result){
            console.log("Kết quả",result.data);
            //cách 1: loacation.reload => load lai file script => gọi api lấy danh sách sinh viên mới về lại
            location.reload();
            //cách 2 : gọi lại api layDanhSachSinhVien tại đây

            layThongTinSinhVien();


        }).catch(function(err){
            console.log("Kết quả",err.response.data)
        })
    
}

var xoaSinhVien = function (maSinhVien){
    //gọi api từ backend => trả promise 
    var promise = svService.xoaSinhVien(maSinhVien);
    //Dùng promise Xử lý thành công hoặc thất bại
    promise.then(function(result){
        console.log(result.data);

        //lấy thoongtin sinh viên
        layThongTinSinhVien();
    }).catch(function(err){
        console.log(err.response.data)
    })
}

var chinhSua = function (maSinhVien){
    // Gọi api lấy về thông tin sinh viên server dựa vào mã 
    var promise = svService.layThongTinSinhVien(maSinhVien);

    promise.then(function(result){
        //lấy về thành công => gán dữ liệu lên các thẻ input
        var sinhVien = result.data;

        document.getElementById('maSinhVien').value = sinhVien.maSinhVien;
        document.getElementById('tenSinhVien').value = sinhVien.tenSinhVien;
        document.getElementById('loaiSinhVien').value = sinhVien.loaiSinhVien;
        document.getElementById('email').value = sinhVien.email;
        document.getElementById('diemToan').value = sinhVien.diemToan;
        document.getElementById('diemLi').value = sinhVien.diemLi;
        document.getElementById('diemHoa').value = sinhVien.diemHoa;
        document.getElementById('diemRenLuyen').value = sinhVien.diemRenLuyen;

    }).catch(function(error){

    })

}

document.getElementById('btnCapNhapSinhVien').onclick = function(){
    //lấy thông tin sinh viên từ người dùng sau khi đã chỉnh sửa

    var sinhVienUpdate = new SinhVien();
    sinhVienUpdate.maSinhVien=document.getElementById('maSinhVien').value ;
    sinhVienUpdate.tenSinhVien=document.getElementById('tenSinhVien').value  ;
    sinhVienUpdate.loaiSinhVien=document.getElementById('loaiSinhVien').value  ;
    sinhVienUpdate.email=document.getElementById('email').value  ;
    sinhVienUpdate.diemToan=document.getElementById('diemToan').value  ;
    sinhVienUpdate.diemLi=document.getElementById('diemLi').value ;
    sinhVienUpdate.diemHoa=document.getElementById('diemHoa').value ;
    sinhVienUpdate.diemRenLuyen=document.getElementById('diemRenLuyen').value ;

    // gọi api cập nhập sinh viên từ BR cung cấp 
    var promise = svService.capNhapThongTinSinhVien(sinhVienUpdate.maSinhVien,sinhVienUpdate);

    promise.then(function(result){
        console.log(result.data)
        // xử lí khi cập nhập  thành công
        layThongTinSinhVien();
    }).catch(function(err){
        console.log(err.response.data);
    })


}
