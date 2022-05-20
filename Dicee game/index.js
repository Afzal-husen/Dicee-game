
document.addEventListener("keypress", () => {

    let randomNumber1 = Math.floor((Math.random() * 6));
    let randomNumber2 = Math.floor((Math.random() * 6));
    let images = ["dice1", "dice2", "dice3", "dice4", "dice5", "dice6"];
    let randomDice1 = images[randomNumber1];
    let randomDice2 = images[randomNumber2];
    let randomImage1 = document.getElementById("img1")
    let randomImage2 = document.getElementById("img2")
    
    // randomImage.src = "/images/" + randomDice + ".png"
    randomImage1.removeAttribute("src");
    randomImage1.setAttribute("src", "/images/" + randomDice1 + ".png")
    
    randomImage2.removeAttribute("src");
    randomImage2.setAttribute("src", "/images/" + randomDice2 + ".png")
    
    
    if (randomNumber1 > randomNumber2) {
        document.getElementById("message").textContent = "Player 1 Has Won!"
    } else {
        document.getElementById("message").textContent = "Player 2 Has Won!"
    }
})