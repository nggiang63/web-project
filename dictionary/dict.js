let keywords = [];

fetch('./keywords.json')
    .then(response => response.json())
    .then(data => {
        keywords = data;
    })
    .catch(error => console.error('Error loading keywords:', error));

function showSuggestions() {
    const input = document.getElementById('searchQuery');
    const query = input.value.toLowerCase();
    const suggestionsContainer = document.getElementById('suggestionsContainer');
    suggestionsContainer.innerHTML = ''; // Xóa gợi ý cũ

    if (query) {
        const suggestions = keywords.filter(keyword => keyword.keyword.toLowerCase().includes(query));

        suggestions.forEach(suggestion => {
            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.innerText = suggestion.keyword;

            // Thêm sự kiện cho mỗi gợi ý
            suggestionItem.onclick = () => {
                input.value = suggestion.keyword; // Gán giá trị từ khóa đã chọn vào input
                suggestionsContainer.innerHTML = ''; // Xóa gợi ý sau khi chọn
                displayResult(suggestion); // Hiển thị kết quả
            };

            suggestionsContainer.appendChild(suggestionItem);
        });
    }
}

document.addEventListener('keydown', (event) => {
    const suggestionsContainer = document.getElementById('suggestionsContainer');
    const suggestionItems = suggestionsContainer.getElementsByClassName('suggestion-item');

    if (event.key === 'Enter') {
        // Nếu có gợi ý nào được chọn, sử dụng gợi ý đó
        if (suggestionItems.length > 0) {
            const selectedSuggestion = keywords.find(k => k.keyword === suggestionItems[0].innerText);
            if (selectedSuggestion) {
                displayResult(selectedSuggestion);
            }
        } else {
            // Nếu không có gợi ý nào được chọn, thực hiện tìm kiếm từ khóa
            searchKeyword();
        }

        // Xóa gợi ý sau khi nhấn Enter
        suggestionsContainer.innerHTML = ''; // Đảm bảo rằng gợi ý không còn hiển thị
    }
});

// Chức năng để tìm kiếm từ khóa và hiển thị kết quả
function searchKeyword() {
    const input = document.getElementById('searchQuery');
    const query = input.value.toLowerCase();
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = ''; // Xóa kết quả cũ

    const keyword = keywords.find(k => k.keyword.toLowerCase() === query);
    if (keyword) {
        displayResult(keyword); // Hiển thị kết quả
    } else {
        resultContainer.innerHTML = '<p>Không tìm thấy từ khóa!</p>'; // Thông báo không tìm thấy
    }

    // Đảm bảo thanh gợi ý không còn hiển thị sau khi tìm kiếm
    const suggestionsContainer = document.getElementById('suggestionsContainer');
    suggestionsContainer.innerHTML = ''; // Xóa gợi ý nếu có
}

// Chức năng hiển thị kết quả
function displayResult(keyword) {
    const resultContainer = document.getElementById('resultContainer');
    const resultTitle = document.createElement('h3');
    const resultDescription = document.createElement('p');
    const resultExample = document.createElement('p');

    resultTitle.innerText = keyword.keyword;
    resultDescription.innerText = keyword.description;
    resultExample.innerText = 'Ví dụ: ' + keyword.example;

    resultContainer.innerHTML = ''; // Xóa kết quả cũ trước khi thêm mới
    resultContainer.appendChild(resultTitle);
    resultContainer.appendChild(resultDescription);
    resultContainer.appendChild(resultExample);
}
