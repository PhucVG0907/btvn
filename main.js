function validateRegisterForm() {
    let username = document.getElementsByClassName("user-input")[0].value;
    let age = document.getElementsByClassName("age-input")[0].value;
    let phone_number = document.getElementsByClassName("phone-input")[0].value;
    let ok = true;
    for( let i of phone_number) {
           if (!('0' <= i && i <= '9' )) {
            ok = false;
            break;
           }
        }
    if (username == '' || age == '' || phone_number == '') {
        alert("Invalid input")
    }if (!ok) {
        alert("Vui lòng xem lại")
    } else {
        alert("Đăng kí thành công")
    }
}