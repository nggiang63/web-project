// Lấy nút cuộn
const scrollBtn = document.getElementById("scrollBtn");

// Hiển thị hoặc ẩn nút cuộn
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // Kiểm tra vị trí cuộn của trang
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "block"; // Hiển thị nút
  } else {
    scrollBtn.style.display = "none"; // Ẩn nút
  }
}

// Cuộn về đầu trang khi nhấp vào nút
scrollBtn.onclick = function () {
  smoothScrollTo(0); // Gọi hàm cuộn mượt mà
};

// Hàm cuộn mượt mà
function smoothScrollTo(target) {
  const startPosition = window.pageYOffset; // Vị trí hiện tại
  const distance = target - startPosition; // Khoảng cách cần cuộn
  const duration = 800; // Thời gian cuộn (ms)
  let startTime = null;

  // Hàm để thực hiện cuộn
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1); // Tính toán tỷ lệ hoàn thành
    const easeInOutQuad = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Hàm easing

    window.scrollTo(0, startPosition + distance * easeInOutQuad); // Cuộn đến vị trí mới

    if (timeElapsed < duration) {
      requestAnimationFrame(animation); // Gọi lại hàm nếu chưa đến thời gian hoàn thành
    }
  }

  requestAnimationFrame(animation); // Bắt đầu hoạt động
}