function ktttk(){
    let ttk =document.getElementById('ttk').value;
    if(!ttk){
        document.getElementById('tbttk').innerHTML='Vui Lòng Điền Vào Chỗ Trống ';
        return false;
    }
    else if (ttk.length < 3 || ttk.length > 50){
        document.getElementById('tbttk').innerHTML='tài khoản không được quá ngắn';
        return false;
    }
    else {
        document.getElementById('tbttk').innerHTML='';
        return true;

    }
}
function ktmk(){
    let mk =document.getElementById('mk').value;
    if(!mk){
        document.getElementById('tbmk').innerHTML='Vui Lòng Điền Vào Chỗ Trống ';
        return false;}

    else if (mk.length < 6 || mk.length > 17){
        document.getElementById('tbmk').innerHTML='Mật khẩu  từ 7 đến 16 kí tự';

    }
    else {
        document.getElementById('tbmk').innerHTML='';
        return true;

    }
}
function ktxnmk(){
    let mk =document.getElementById('mk').value;
    let xnmk=document.getElementById('xnmk').value;
    if(!xnmk){
        document.getElementById('tbxnmk').innerHTML='Vui Lòng Điền Vào Chỗ Trống';
        return false;

    }
    else if (xnmk!==mk){
        document.getElementById('tbxnmk').innerHTML='Mật Khẩu Điền Không Trùng Khớp';
        return false;
    }
    else {
        document.getElementById('tbxnmk').innerHTML='';
        return true;
    }
}
function ktsdt(){
   let  sdt=document.getElementById('sdt').value;
    const phoneNumberRegex = /^(03|05|07|08|09)+([0-9]{8})$/;
    if(!sdt){
        document.getElementById('tbsdt').innerHTML='Vui Lòng Điền Vào Chỗ Trống';
        return false;
    }
    else if (!phoneNumberRegex.test(sdt)){
        document.getElementById('tbsdt').innerHTML='Vui Lòng Nhập Đúng Định Dạng';
        return false;
    }
    else {
        document.getElementById('tbsdt').innerHTML='';
        
        return true;
    }
}
function ktemail(){
    let email =document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email){
        document.getElementById('tbemail').innerHTML='Vui Lòng Điền Vào Chỗ Trống';
        return false;
    }
    else if (!emailRegex.test(email)){
        document.getElementById('tbemail').innerHTML='Vui Lòng Nhập Đúng Định Dạng';
        return false;
    }
    else {
        document.getElementById('tbemail').innerHTML='';
        return true;
    }}
    $(document).ready(function() {
        // Bắt sự kiện khi người dùng submit form
        $('#signup-form').submit(function(event) {
          event.preventDefault(); 
          // Kiểm tra điều kiện đăng ký
          var isValidUsername = ktttk();
          var isValidPassword = ktmk();
          var isValidConfirmPassword = ktxnmk();
          var isValidPhone = ktsdt();
          var isValidEmail = ktemail();
      
          // Nếu không có lỗi, hiển thị thông tin đăng ký
          if (isValidUsername && isValidPassword && isValidConfirmPassword && isValidPhone && isValidEmail) {
            $('#signup-username').text($('#ttk').val());
            $('#signup-password').text($('#mk').val());
            $('#signup-email').text($('#email').val());
            $('#signup-phone').text($('#sdt').val());
            
            $('#signup-success').show();
            $('#signup-form').hide();
          }
        });
      });

    //log in
    function kttk()   {
        let tk= document.getElementById('tk').value;
        if(!tk){
            document.getElementById('tbtk').innerHTML='Vui Lòng Điền Vào Chỗ Trống';
            return false;
        }
        else{
            document.getElementById('tbtk').innerHTML='';
            return true;
        }
    }
    function ktmk1(){
        let mk1 =document.getElementById('mk1').value;
        if(!mk1){
            document.getElementById('tbmk1').innerHTML='Vui Lòng Điền Vào Chỗ Trống';
            return false;
        }
        else{
            document.getElementById('tbmk1').innerHTML='';
            return true;
        }
    }

     
    
