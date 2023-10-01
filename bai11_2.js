document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("text");
    const increaseButton = document.getElementById("increase");
    const decreaseButton = document.getElementById("decrease");
    const resetButton = document.getElementById("reset");
    let fontSize = 16; // Kích thước font chữ ban đầu

    increaseButton.addEventListener("click", function () {
        fontSize *= 1.4; // Tăng kích thước lên 40%
        textElement.style.fontSize = `${fontSize}px`;
    });

    decreaseButton.addEventListener("click", function () {
        fontSize *= 0.6; // Giảm kích thước đi 40%
        textElement.style.fontSize = `${fontSize}px`;
    });

    resetButton.addEventListener("click", function () {
        fontSize = 16; // Trở về kích thước ban đầu
        textElement.style.fontSize = `${fontSize}px`;
    });
});