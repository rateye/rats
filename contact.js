document.addEventListener("DOMContentLoaded", function() {
    const funFacts = [
        "Did you know? Flamingos can only eat with their heads upside down!",
        "Fun fact: Bananas are berries, but strawberries aren’t!",
        "Here's something cool: A group of cats is called a 'clowder'!",
        "Random trivia: Honey never spoils. Archaeologists found 3000-year-old honey in Egypt that’s still good!"
    ];
    
    const factElement = document.querySelector(".fun-fact");
    let index = 0;
    setInterval(() => {
        factElement.textContent = funFacts[index];
        index = (index + 1) % funFacts.length;
    }, 5000);
});
