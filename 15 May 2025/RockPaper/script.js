const button = document.querySelectorAll("button");
const resultE1 = document.getElementById("result");
const playerscoreE1 = document.getElementById("user-score");
const computerscoreE1 = document.getElementById("conputer-score");

let playerscore = 0;
let computerscore = 0;

button.array.forEach((button) => {
    button.addEventListener("click", () => {
        const result = playround(button.id, computerplay());
        resultE1.textContent = result;
    });
});

function computerplay(){
    const choices = ["tas", "kagit", "makas"];
    const randomchoices = Math.floor(Math.random() * choices.length);
    return choices[randomchoices];
}

function playround(playerselection, computerselecition){
    if(playerselection == computerselecition){
        return "Berabere";
    }else if(
        (playerselection === "tas" && computerselecition === "makas") ||
        (playerselection === "kagit" && computerselecition === "tas") ||
        (playerselection === "makas" && computerselecition === "kagit")
    ){
        playerscore++
        playerscoreE1.textContent = playerscore;
        return "Sen kazandın" + playerselection + "yener" + computerselecition;
    }else{
        computerselecition++
        playerscoreE1.textContent = playerscore;
        return "Kaybettin" + computerselecition + "yener" + playerselection;
    }

}