document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.1)";
            link.style.transition = "0.3s";
        });
        link.addEventListener("mouseleave", () => {
            link.style.transform = "scale(1)";
        });
    });
});