document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.jump-nav a');
    if (!navLinks.length) return;

    const sections = Array.from(navLinks)
        .map(link => document.getElementById(link.getAttribute('href').substring(1)))
        .filter(Boolean);

    const setActive = (id) => {
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
    };

    const observer = new IntersectionObserver((entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length) {
            visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
            setActive(visible[0].target.id);
        }
    }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));
});
