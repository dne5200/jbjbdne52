// script.js
document.addEventListener('DOMContentLoaded', function () {
    // 모든 링크에 클릭 이벤트 추가
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // 기본 동작 방지 (이동)
            const targetId = this.getAttribute('href').substring(1); // 이동할 대상 ID 추출
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth' // 부드럽게 스크롤
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#222'; // 스크롤이 50px 넘으면 배경색 변경
        } else {
            navbar.style.backgroundColor = '#333'; // 원래 배경색으로 복원
        }
    });
});