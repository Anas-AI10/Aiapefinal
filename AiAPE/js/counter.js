document.addEventListener('DOMContentLoaded', () => {
    const counts = document.querySelectorAll('.count');
    const speed = 1000; // Adjust speed for counting

    counts.forEach((counter) => {
        function update() {
            const target = Number(counter.getAttribute('data-target'));
            const count = Number(counter.innerText);
            const increment = target / speed;
            if (count < target) {
                counter.innerText = Math.floor(count + increment);
                setTimeout(update, 1); // Adjust delay for smooth counting
            } else {
                counter.innerText = target;
            }
        }
        update();
    });
});
