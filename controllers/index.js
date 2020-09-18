//Tạo ra mảng dữ liệu quản lý các sinh viên
var mangSinhVien = [];

var validate = new Validation();



// định nghĩa sự kiện khi người dùng click vào nút thêm sinh viên
document.getElementById('btnThemSinhVien').onclick=function(){
    //tạo đối tượng lưu trữ thông tin người dùng nhập vào 
    var sv = new SinhVien();
    sv.maSinhVien=document.getElementById('maSinhVien').value;
    sv.tenSinhVien=document.getElementById('tenSinhVien').value;
    sv.loaiSinhVien=document.getElementById('loaiSinhVien').value;
    sv.email=document.getElementById('email').value;
    sv.diemToan=document.getElementById('diemToan').value;
    sv.diemLi=document.getElementById('diemLi').value;
    sv.diemHoa=document.getElementById('diemHoa').value;
    sv.diemRenLuyen=document.getElementById('diemRenLuyen').value;
    sv.loaiSinhVien=document.getElementById('loaiSinhVien').value;

    // kiểm tra dữ liệu hợp lệ

    // if(sv.maSinhVien === ''){
    //    document.getElementById('err_maSinhVien_ktRong').innerHTML= 'Mã sinh viên không được bỏ trống!'  ;
    //     return; // lệnh trả về và không làm tiếp các đoạn code phía sau
    // }else{
    //     document.getElementById('err_maSinhVien_ktRong').innerHTML='';
    // }
    var valid =true;

    //-------------kiểm tra rỗng------------
    valid &= validate.kiemTraRong(sv.maSinhVien,'mã sinh viên','#err_maSinhVien_ktRong') & validate.kiemTraRong(sv.tenSinhVien,'tên sinh viên','#err_tenSinhVien_ktRong') & validate.kiemTraRong(sv.email,'email','#err_email_ktRong') & validate.kiemTraRong(sv.diemToan,'Điểm Toán','#err_diemToan_ktRong') & validate.kiemTraRong(sv.diemLi,'Điểm Lí','#err_diemLi_ktRong') & validate.kiemTraRong(sv.diemHoa,'Điểm Hóa','#err_diemHoa_ktRong') & validate.kiemTraRong(sv.diemRenLuyen,'Điểm Rèn Luyện','#err_diemRenLuyen_ktRong');

    //------kiểm  tra tất  cả là ký tự -------
    valid &= validate.kiemTraChu(sv.tenSinhVien,'tên sinh viên','#err_tenSinhVien_allLetters');
    //--------kiểm tra email------
    valid &= validate.kiemTraEmail(sv.email,'email','#err_email_fomat');
    //--------kiểm tra điểm số-----
    valid &= validate.kiemTraTatCaCacSo(sv.maSinhVien,'mã sinh viên','#err_maSinhVien_allNumber') & validate.kiemTraTatCaCacSo(sv.diemToan,'điểm toán','#err_diemToan_allNumber') & validate.kiemTraTatCaCacSo(sv.diemLi,'điểm Lí','#err_diemLi_allNumber') & validate.kiemTraTatCaCacSo(sv.diemHoa,'Điểm Hóa','#err_diemHoa_allNumber') & validate.kiemTraTatCaCacSo(sv.diemRenLuyen,'điểm rèn luyện','#err_diemRenLuyen_allNumber') ;
    //---------kiểm tra độ dài-----------
    
    valid &= validate.kiemTraDoDai(sv.maSinhVien,'mã sinh viên','#err_maSinhVien_maxMinLength',6,4);

    //---------kiểm tra giá trị----------

    valid &= validate.kiemTraGiaTri(sv.diemToan,'điểm toán','#err_diemToan_maxMinValue',10,1) & validate.kiemTraGiaTri(sv.diemLi,'điểm lí','#err_diemLi_maxMinValue',10,1) & validate.kiemTraGiaTri(sv.diemHoa,'điểm toán','#err_diemHoa_maxMinValue',10,1) & validate.kiemTraGiaTri(sv.diemRenLuyen,'điểm rèn luyện','#err_diemRenLuyen_maxMinValue',10,1) 



    //trim(): loại bỏ khoảng cách đầu và cuối của chuỗi
    // if(sv.maSinhVien.trim() === ''){
    //     document.getElementById('err_maSinhVien_ktRong').innerHTML= 'Mã sinh viên không được bỏ trống!'  ;
    //      valid = false;
    //  }else{
    //      document.getElementById('err_maSinhVien_ktRong').innerHTML='';
    //  }

    
     //-------kiểm tra tất cả là Kí Tự---------
     //Kiểm tra định dạng của chuỗi regex
    //  var regexAllLetters = /^[A-Z a-z]+$/;
    //  if(!regexAllLetters.test(sv.tenSinhVien)){
    //      document.getElementById('err_tenSinhVien_allLetters').innerHTML = 'Tên sinh viên phải nhập chữ!';
    //      valid = false;
    //  }else{
    //  document.getElementById('err_tenSinhVien_allLetters').innerHTML = '';
    // }
   

     //so sánh định dạng
    //  var regex = /cyberlearn/ig;
    //  var inputString = 'frontendcyberlearnabc';

    //  console.log(regex.test(inputString));


    mangSinhVien.push(sv);

    console.log('mangSinhVien',mangSinhVien);
    //gọi hàm tạo bảng
    taoBang(mangSinhVien);

    luulocalStorage();

    if(!valid){
        return;
    }

   
    // tạo thẻ Td chứa nội dung
    // var tdMaSinhVien = document.createElement('td');
    // tdMaSinhVien.innerHTML = sv.maSinhVien;

    // var tdTenSinhVien = document.createElement('td');
    // tdTenSinhVien.innerHTML = sv.tenSinhVien;

    // var tdEmail= document.createElement('td');
    // tdEmail.innerHTML = sv.email;

    // var tdLoaiSinhVien = document.createElement('td');
    // tdLoaiSinhVien.innerHTML = sv.loaiSinhVien;
    // var tdDiemToan = document.createElement('td');
    // tdDiemToan.innerHTML = sv.diemToan;
    // var tdDiemLi = document.createElement('td');
    // tdDiemLi.innerHTML = sv.diemLi;
    // var tdDiemHoa = document.createElement('td');
    // tdDiemHoa.innerHTML = sv.diemHoa;
    
    // var tdDiemTrungBinh = document.createElement('td');
    // tdDiemTrungBinh.innerHTML = sv.tinhDiemTrungBinh();

    // var tdDiemRenLuyen = document.createElement('td');
    // tdDiemRenLuyen.innerHTML = sv.diemRenLuyen;

    
    // var tdChucNang = document.createElement('td');

    // //tạo td chứa các nút chức năng xóa sửa
    // var btnXoaSInhVien = document.createElement('button');
    // btnXoaSInhVien.className= 'btn btn-danger';
    // btnXoaSInhVien.innerHTML= 'Xóa';
    // btnXoaSInhVien.onclick = function(){
    //     //this đại diện co nút buttn#btnXoaSinhVien
    //     this.parentElement.parentElement.remove()
    // }

    //thêm vào tdChucNang nút xóa
    // tdChucNang.appendChild(btnXoaSInhVien);

    //tạo thẻ tr
    // var trSinhVien = document.createElement('tr');
    //Thêm thẻ Td vào Tr
    // trSinhVien.appendChild(tdMaSinhVien);
    // trSinhVien.appendChild(tdTenSinhVien);
    // trSinhVien.appendChild(tdEmail);
    // trSinhVien.appendChild(tdLoaiSinhVien);
    // trSinhVien.appendChild(tdDiemTrungBinh);
    
    // trSinhVien.appendChild(tdDiemRenLuyen);
    // trSinhVien.appendChild(tdChucNang);
    


    // var tbodySinhVien = document.getElementById('tblSinhVien');
    // tbodySinhVien.appendChild(trSinhVien);
}

var taoBang = function(arrSinhVien){
    var contentTable = '';
    for(var index = 0;index <arrSinhVien.length;index++){
        // mỗi lần duyệt lấy ra 1 đối tượng sinhVien từ trong mảng
        var sv = arrSinhVien[index];
        // tạo bảng đối tượng
        var sinhVien = new SinhVien(sv.maSinhVien,sv.tenSinhVien,sv.email,sv.diemToan,sv.diemLi,sv.diemHoa,sv.diemRenLuyen,sv.loaiSinhVien);
        // sinhVien.maSinhVien = sv.maSinhVien;
        // sinhVien.tenSinhVien = sv.tenSinhVien;
        // sinhVien.email = sv.email;
        // sinhVien.diemToan = sv.diemToan;
        // sinhVien.diemLi = sv.diemLi;
        // sinhVien.diemHoa = sv.diemHoa;
        // sinhVien.diemRenLuyen = sv.diemRenLuyen;
        // sinhVien.loaiSinhVien = sv.loaiSinhVien;


        //tạo thẻ tr + dồn vào nội dung contentTable
        contentTable += `
            <tr>
                <td>${sinhVien.maSinhVien}</td>
                <td>${sinhVien.tenSinhVien}</td>
                <td>${sinhVien.email}</td>
                <td>${sinhVien.loaiSinhVien}</td>
                <td>${sinhVien.tinhDiemTrungBinh()}</td>
                <td>${sinhVien.diemRenLuyen}</td>
                <td><button class="btn btn-danger"  onclick="chinhSuaSinhVien('${sinhVien.maSinhVien}')">Chỉnh Sửa</button></td>
                <td><button class="btn btn-danger" onclick="xoaSinhVien('${sinhVien.maSinhVien}')">Xóa</button></td>
            </tr>
        `
    }
 
    console.log('contentTable',contentTable);//=> log ra chuỗi nhiều thẻ <tr></tr> chứa thông tin sinh viên
    document.getElementById('tblSinhVien').innerHTML = contentTable
}
var chinhSuaSinhVien = function(maSV){
    //khóa nút chỉnh sửa sinh viên
    document.getElementById('maSinhVien').disabled = true;
    // tìm sinh viên có mã sinh viên trong mảng
    for(var index = 0;index < mangSinhVien.length; index++){
        // mỗi lần duyệt lấy ra 1 sinh viên
        var sv = mangSinhVien[index];
        // kiểm tra từng sv => xem sv nào có mã = maSV khi click => gán lên control phía trên
        if(sv.maSinhVien === maSV){
            document.getElementById('maSinhVien').value=sv.maSinhVien;
            document.getElementById('tenSinhVien').value=sv.tenSinhVien;
            document.getElementById('loaiSinhVien').value= sv.loaiSinhVien;
            document.getElementById('email').value=sv.email;
            document.getElementById('diemToan').value=sv.diemToan;
            document.getElementById('diemLi').value= sv.diemLi;
            document.getElementById('diemHoa').value= sv.diemHoa;
            document.getElementById('diemRenLuyen').value=sv.diemRenLuyen;
            document.getElementById('loaiSinhVien').value= sv.loaiSinhVien;
        }

    }
    //gán thông tin sinh viên tìm được lên các control (thẻ input) phía trên
}

//xây dựng phương thức cập nhập sinh viên
document.getElementById('btnCapNhapSinhVien').onclick= function(){
    //lấy thông tin người dùng nhập từ giao diện (sau khi người dùng đã thay đổi thông tin) => gán cho đối tượng sinh viên
    var svUpdate = new SinhVien();
    svUpdate.maSinhVien=document.getElementById('maSinhVien').value;
    svUpdate.tenSinhVien=document.getElementById('tenSinhVien').value;
    svUpdate.loaiSinhVien=document.getElementById('loaiSinhVien').value;
    svUpdate.email=document.getElementById('email').value;
    svUpdate.diemToan=document.getElementById('diemToan').value;
    svUpdate.diemLi=document.getElementById('diemLi').value;
    svUpdate.diemHoa=document.getElementById('diemHoa').value;
    svUpdate.diemRenLuyen=document.getElementById('diemRenLuyen').value;
    svUpdate.loaiSinhVien=document.getElementById('loaiSinhVien').value;
    
    console.log(svUpdate);
    // tìm svUpdate có mã trùng với maSV trong mảng => gán dữ liệu sinhVien Đó= svUpdate
    for (var index = 0;index < mangSinhVien.length; index++){
        var sv = mangSinhVien[index];
        if(sv.maSinhVien === svUpdate.maSinhVien){
            sv.tenSinhVien =svUpdate.tenSinhVien;
            sv.email =svUpdate.email;
            sv.diemToan =svUpdate.diemToan;
            sv.diemLi =svUpdate.diemLi;
            sv.diemHoa =svUpdate.diemHoa;
            sv.diemRenLuyen =svUpdate.diemRenLuyen;

        }
    }
    //gọi hàm tạo bảng
    taoBang(mangSinhVien);
    luulocalStorage();

    //clear tất cả thông tin và bật lại input mã
    document.getElementById('maSinhVien').disabled = false;
    var mangTheInput = document.querySelectorAll('input');
    for (var i=0;i<mangTheInput.length; i++){
        var tagInput = mangTheInput[i];
        // gán lại value = rổng cho từng thẻ 1
        tagInput.value = '';
    }
}

var xoaSinhVien = function(maSV){
    // alert(maSV);
    //mangSinhVien là biến toàn cục khai báo phía trên đầu file
    for(var index=mangSinhVien.length-1;index>=0;index--){
        // mỗi lần duyệt lấy ra 1 đối tượng Sinh Viên
        var sv = mangSinhVien[index];

        // kiểm tra từng phần tử sinhVien có mã= với maSV được click ở nút xóa hay không?
        if(sv.maSinhVien === maSV){
            mangSinhVien.splice(index,1); // Hàm xóa phần tử của mảng trong js, index: vị trí xóa, 1 là tại vị trí đó xóa 1 phần tử
        }

    }
    //sau khi xóa thì tạo lại bảng= mảng dữ liệu đã  xóa
    taoBang(mangSinhVien);
    //lưu vào localstrorage sau khi xóa sinh viên
    luulocalStorage();

}
var luulocalStorage = function(){
    //các bước lưu trữ mảng sinh viên xuống localStorage
    var sMangSinhVien = JSON.stringify(mangSinhVien);//=>Biến mảng sinh viên thành chuỗi

    // console.log('sMangSinhVien',sMangSinhVien);
    // console.log('mangSinhVien'.mangSinhVien);
    localStorage.setItem('mangSinhVien',sMangSinhVien);

}
var layDuLieuLocalStorage = function(){
    // kiểm tra dữ liệu có trong localStorage hay chưa ?
    if (localStorage.getItem('mangSinhVien')){
    // lấy dữ liệu từ localStorage(lấy ra dữ liệu là chuổi)
    var sMangSinhVien = localStorage.getItem('mangSinhVien');
    // biến đổi dữ liệu từ chuỗi json => mảng và gán vào mảng sinh viên
    mangSinhVien = JSON.parse(sMangSinhVien);
    //Gọi hàm tạo bảng => tạo Html
    taoBang(mangSinhVien);
    }
   

}
// Gọi hàm localStorage khi trình duyệt vừa load
layDuLieuLocalStorage();