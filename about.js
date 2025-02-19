document.addEventListener("DOMContentLoaded", function() {
    const signature = document.querySelector(".signature");
    signature.addEventListener("mouseover", () => {
        signature.style.color = "#ffcc00";
        signature.style.transition = "0.3s";
    });
    signature.addEventListener("mouseleave", () => {
        signature.style.color = "#ff4081";
    });
});