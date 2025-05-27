var englis = ["apple", "bottle", "computer", "book", "mouse", "wall", "pen", "paper", "table"];
var turkis = ["elma", "şişe", "bilgisayar", "kitap", "fare", "duvar", "kalem", "kağıt", "masa"];

function cevir(){
    var sirano;
    sirano = englis.indexOf(document)
    if(sirano >= 0){
        document.getElementById("turkis").innerText=turkis(sirano);
    }
}