/* illustration.js */
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".illustration-card");
    cards.forEach(card => {
        card.addEventListener("click", function() {
            alert("Viewing illustration: " + this.querySelector(".illustration-title").textContent);
        });
    });
});
