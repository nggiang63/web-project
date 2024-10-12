let keywords = [];

// Tải dữ liệu từ file JSON
fetch('./keywords.json')
    .then(response => response.json())
    .then(data => {
        keywords = data;
    })
    .catch(error => console.error('Error loading keywords:', error));

// Chức năng để hiển thị gợi ý
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
            suggestionItem.onclick = () => {
                input.value = suggestion.keyword; // Gán giá trị từ khóa đã chọn vào input
                suggestionsContainer.innerHTML = ''; // Xóa gợi ý sau khi chọn
                displayResult(suggestion); // Hiển thị kết quả
            };
            suggestionsContainer.appendChild(suggestionItem);
        });
    }
}

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

    resultContainer.appendChild(resultTitle);
    resultContainer.appendChild(resultDescription);
    resultContainer.appendChild(resultExample);
}
