document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".apple-section");

    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
});
