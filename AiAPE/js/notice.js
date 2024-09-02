document.addEventListener("DOMContentLoaded", function () {
    const noticeBoardContent = document.querySelector('.notice-board-content');
    const noticeBoardHeight = noticeBoardContent.scrollHeight;
    const scrollSpeed = 25000; 

    function scrollNotices() {
        noticeBoardContent.style.transition = `transform ${scrollSpeed}ms linear`;
        noticeBoardContent.style.transform = `translateY(-${noticeBoardHeight}px)`;

        noticeBoardContent.addEventListener('transitionend', function () {
            noticeBoardContent.style.transition = 'none';
            noticeBoardContent.style.transform = 'translateY(0)';
            requestAnimationFrame(() => {
                requestAnimationFrame(scrollNotices);
            });
        }, { once: true });
    }

    scrollNotices();
});
