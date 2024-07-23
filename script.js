document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link-item');

    links.forEach(link => {
        link.addEventListener('click', () => {
            console.log(`Navigating to ${link.textContent}`);
        });
    });
});
