const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a",
    "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1",
    "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%",
    "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let count = 0;
let passwordLength = 8;
let passwordinput = document.querySelector(".flex-item-left");
let passwordMessage = document.querySelector(".flex-item-right")

let generatepasswordButton = document.getElementById("Generate-btn");

function generatePassword() {
    for (let i = 0; i < characters.length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        let randomCharacter = characters[randomIndex];
        if (count < passwordLength) {
            passwordinput.textContent += randomCharacter;
        } else {
            break;

        }
        count += 1;

    }

}
// function generatePassword() {
//     console.log("Hi, clicked");
// }