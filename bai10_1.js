document.addEventListener("DOMContentLoaded", function () {
    const countButton = document.getElementById("countButton");
    const resultElement = document.getElementById("result");

    countButton.addEventListener("click", function () {
        let count = 0;
        for (let i = 1; i <= 100; i++) {
            if (i % 3 === 0 || i % 7 === 0) {
                count++;
            }
        }
        resultElement.textContent = `Số lượng số nguyên chia hết cho 3 hoặc 7 trong đoạn từ 1 đến 100 là: ${count}`;
    });
});