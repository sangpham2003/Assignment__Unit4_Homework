document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const fullNameInput = document.getElementById("fullName");
    const phoneNumberInput = document.getElementById("phoneNumber");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const errorMessages = document.getElementById("errorMessages");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();
        errorMessages.innerHTML = ""; // Xóa thông báo lỗi trước khi kiểm tra lại

        // Kiểm tra các điều kiện và hiển thị thông báo lỗi
        if (fullNameInput.value.length < 8) {
            errorMessages.innerHTML += "Họ Tên phải lớn hơn 8 ký tự.<br>";
        }

        if (!/^\d+$/.test(phoneNumberInput.value)) {
            errorMessages.innerHTML += "Số Điện Thoại phải là số và không được chứa ký tự.<br>";
        }

        if (!validateEmail(emailInput.value)) {
            errorMessages.innerHTML += "Email không đúng định dạng chuẩn (VD: abc@domain.xy).<br>";
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            errorMessages.innerHTML += "Mật khẩu nhập lại không khớp với mật khẩu trước.<br>";
        }

        if (errorMessages.innerHTML === "") {
            alert("Đăng ký thành công!");
            registrationForm.reset(); // Xóa dữ liệu trong form sau khi đăng ký thành công
        }
    });
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
