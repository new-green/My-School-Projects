var randomnumnber = Math.floor(Math.random()*100);
const userinput = document.getElementById('userinput')
const paragraf = document.getElementById('paragraf')
console.log(randomnumnber)

function guess(){
    var tahmin = parseInt(userinput.value);
    if(tahmin < randomnumnber){
        paragraf.textContent = "Daha büyük bir sayı giriniz"
    }else if(tahmin > randomnumnber){
        paragraf.textContent = "Daha küçük bir sayı giriniz"
    }else if(!tahmin){
        paragraf.textContent = "Bir değer giriniz"
    }else{
        paragraf.textContent = "Doğru bildiniz"
    }
}