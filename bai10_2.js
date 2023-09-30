function tinhTong(n) {
    let S = 0;
    let i = 1;

    do {
        S += i;
        i++;
    } while (i <= n);

    return S;
}

document.addEventListener("DOMContentLoaded", function () {
    const inputNumber = document.getElementById("inputNumber");
    const calculateButton = document.getElementById("calculateButton");
    const resultElement = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const n = parseInt(inputNumber.value);

        if (isNaN(n) || n < 1) {
            resultElement.textContent = "Vui lòng nhập một số nguyên dương hợp lệ.";
        } else {
            const tong = tinhTong(n);
            resultElement.textContent = `Tổng S = 1 + 2 + 3 + ... + ${n} là: ${tong}`;
        }
    });
});