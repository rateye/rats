/* photography.js */
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".photo-card");
    cards.forEach(card => {
        card.addEventListener("click", function() {
            alert("Exploring photo: " + this.querySelector(".photo-title").textContent);
        });
    });
});