document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".character-item");
    items.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.boxShadow = "6px 6px 25px rgba(255, 64, 129, 0.5)";
        });
        item.addEventListener("mouseleave", () => {
            item.style.boxShadow = "4px 4px 20px rgba(0, 0, 0, 0.1)";
        });
    });
});