function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function lock() {
    boutons = document.getElementsByClassName("chiffre");
    for (var i = 0; i < boutons.length; i++) {
        boutons[i].setAttribute("disabled", "");
    }
}

function add_to_code(nombre) {
    new_code = code.innerHTML;
    new_code += nombre;
    new_code = new_code.slice(1)
    code.innerHTML = new_code;
    if (new_code[0] != "*")
        lock();
}

var code = document.getElementById("code");
var ligne1 = document.getElementById("ligne1");
var ligne2 = document.getElementById("ligne2");

var chiffres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var n = 9;
var x = 0;

for (var i = 0; i <= 9; i++) {
    x = chiffres.splice(chiffres.indexOf(getRandomInt(n)), 1);
    if (i >= 5)
        ligne1.innerHTML += "<button class='chiffre' onclick='add_to_code(" + x + ")'>" + x + "</button>";
    else
        ligne2.innerHTML += "<button class='chiffre' onclick='add_to_code(" + x + ")'>" + x + "</button>";
    n--;
}
