// Lấy ra danh sách các checkbox và nút "Check All" và "Uncheck All"
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const checkAllButton = document.getElementById('checkAll');
const uncheckAllButton = document.getElementById('uncheckAll');

// Thêm sự kiện click cho nút "Check All"
checkAllButton.addEventListener('click', () => {
    checkboxes.forEach((checkbox) => {
        checkbox.checked = true;
    });
});

// Thêm sự kiện click cho nút "Uncheck All"
uncheckAllButton.addEventListener('click', () => {
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });
});