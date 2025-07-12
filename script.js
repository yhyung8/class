document.addEventListener('DOMContentLoaded', function() {
    const lessonHeaders = document.querySelectorAll('.lesson h3');

    lessonHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // 현재 클릭된 헤더의 다음 형제 요소(즉, .lesson-content)를 찾습니다.
            const content = this.nextElementSibling;
            // 현재 헤더 내의 토글 아이콘(▶)을 찾습니다.
            const toggleIcon = this.querySelector('.toggle-icon');

            // 내용이 보이는 상태라면 숨기고, 숨겨진 상태라면 보이게 합니다.
            if (content.style.display === 'block') {
                content.style.display = 'none';
                toggleIcon.textContent = '▶'; // 닫힘 상태 아이콘
                this.classList.remove('active'); // CSS를 위한 클래스 제거
            } else {
                // 다른 모든 열려있는 내용을 닫습니다.
                document.querySelectorAll('.lesson-content').forEach(item => {
                    item.style.display = 'none';
                    item.previousElementSibling.classList.remove('active');
                    item.previousElementSibling.querySelector('.toggle-icon').textContent = '▶';
                });

                // 현재 내용을 보이게 합니다.
                content.style.display = 'block';
                toggleIcon.textContent = '▼'; // 열림 상태 아이콘
                this.classList.add('active'); // CSS를 위한 클래스 추가
            }
        });
    });
});