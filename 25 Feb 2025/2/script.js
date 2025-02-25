function not( props ){
    props = Number(document.getElementById("notal").value);
    if (props < 0 || props > 100){
        document.getElementById("sonuc").textContent = props + "Gersiz not lütfen geçerliz sayı arağlığından giriş yapınız";
    }

    switch (true){
        case (props >= 90):
            document.getElementById("cikti").textContent = "A";
            break;
        case (props >= 80 && props < 89 ):
            document.getElementById("cikti").textContent = "B";
            break;
        case (props >= 70 && props < 79):
            document.getElementById("cikti").textContent = "C";
            break;
        case (props >= 60 && props < 69):
            document.getElementById("cikti").textContent = "D";
            break;
        case (props >= 50 && props < 59):
            document.getElementById("cikti").textContent = "E";
            break;
        case (props >= 10000):
            document.getElementById("cikti").textContent = "THATS OVER 9000!!!"
            break;
        default:
            document.getElementById("cikti").textContent = "F";
            break;

    }
}