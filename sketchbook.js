
;document.addEventListener("DOMContentLoaded", function() {
    const pages = document.querySelectorAll(".page");
    let currentPage = 0;
    
    document.addEventListener("click", function() {
        if (currentPage < pages.length) {
            pages[currentPage].classList.add("flipped");
            currentPage++;
        } else {
            pages.forEach(page => page.classList.remove("flipped"));
            currentPage = 0;
        }
    });
});