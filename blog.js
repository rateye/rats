document.addEventListener("DOMContentLoaded", function() {
    const blogCards = document.querySelectorAll(".blog-card");
    blogCards.forEach(card => {
        card.addEventListener("click", function() {
            alert("You clicked on: " + this.querySelector(".blog-title").textContent);
        });
    });
});
