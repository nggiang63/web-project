window.addEventListener('load', function () {
    var questions = document.querySelectorAll('.question ul');
    var messages = [
        "Woahh! Amazing, good job!!",
        "Siêu quá ahh!",
        "Uhmmm, cũng ổn đấy!",
        "Trời ơi! Các bạn không nghe nhóm mình trình bày sao? Huhu, buồn quá!"
    ];

    questions.forEach(function (ul) {
        var liItems = ul.querySelectorAll('li');
        var message = document.querySelector('.message');

        liItems.forEach(function (li) {
            li.addEventListener('click', function () {
                // Kiểm tra xem câu hỏi này đã được trả lời chưa
                if (ul.classList.contains('answered')) {
                    return; // Nếu đã trả lời, không cho chọn lại
                }

                // Đánh dấu câu hỏi đã được trả lời
                ul.classList.add('answered');
                li.classList.add('selected');
                
                // Kiểm tra xem người dùng có chọn câu trả lời đúng không
                if (li.classList.contains('correct')) {
                    li.classList.add('correct'); // Đánh dấu đúng
                } else {
                    li.classList.add('wrong'); // Đánh dấu sai
                }

                // Kiểm tra số lượng câu hỏi đã được trả lời
                if (document.querySelectorAll('.question ul.answered').length === questions.length) {
                    var correctCount = document.querySelectorAll('.question ul li.correct.selected').length;
                    var resultMessage = `Đúng: <span class="correct">${correctCount}</span>/<span class="total">${questions.length}</span> câu hỏi. `;
                    
                    // Hiển thị thông báo dựa trên số câu trả lời đúng
                    if (correctCount === questions.length) {
                        resultMessage += messages[0];
                    } else if (correctCount >= (questions.length * 0.8)) {
                        resultMessage += messages[1];
                    } else if (correctCount >= (questions.length * 0.5)) {
                        resultMessage += messages[2];
                    } else {
                        resultMessage += messages[3];
                    }

                    // Cập nhật message với kết quả
                    message.innerHTML = resultMessage;
                }
            });
        });
    });
});
