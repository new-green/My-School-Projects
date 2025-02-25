function impact() {
    var first_number = Number(document.getElementById("first_number_input").value);
    var second_number = Number(document.getElementById("second_number_input").value);
    var final_result = "";

    for (let i = 0; i <= second_number; i++) {
        final_result += `${first_number} x ${i} = ${first_number * i} <br/>`;
    }document.getElementById("result").innerHTML = final_result;
}

function division() {
    var first_number = Number(document.getElementById("first_number_input").value);
    var second_number = Number(document.getElementById("second_number_input").value);
    var final_result = "";

    if (first_number === 0) {
        alert("Number 1 cannot be 0");
        return;
    }else if (second_number === 0) {
        alert("Number 2 cannot be 0");
        return;
    }for (let i = 1; i <= second_number; i++) { // i = 1'den başlatıldı (0'a bölme hatasını önlemek için)
        final_result += `${first_number} / ${i} = ${first_number / i} <br/>`;
    }document.getElementById("result").innerHTML = final_result;
}

function plus() {
    var first_number = Number(document.getElementById("first_number_input").value);
    var second_number = Number(document.getElementById("second_number_input").value);
    var final_result = "";
    for (let i = 0; i <= second_number; i++) {
        final_result += `${first_number} + ${i} = ${first_number + i} <br/>`;
    }document.getElementById("result").innerHTML = final_result;
}

function decal() {
    var first_number = Number(document.getElementById("first_number_input").value);
    var second_number = Number(document.getElementById("second_number_input").value);
    var final_result = "";
    if (first_number < second_number) {
        alert("The first number cannot be greater than the second number.");
        return;
    }for (let i = 0; i <= second_number; i++) {
        final_result += `${first_number} - ${i} = ${first_number - i} <br/>`;
    }document.getElementById("result").innerHTML = final_result;
}
