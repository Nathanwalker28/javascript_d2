//console.log(document.getElementById('bouton'));
//console.log(document.getElementsByTagName('button'));



for (let i = 0; i < document.querySelectorAll("main button").length; i++) {
    console.log(document.querySelectorAll("main button"));
    //console.log()
}


for (let i = 0; i<document.getElementsByName("nom").length; i++) {
    console.log(document.getElementsByName("nom")[i]);
}
    //     console.log(document.querySelector('.btn'));

/* *********************************** */
// btn = document.getElementById("bouton");

// btn.onclick = function() {
//     console.log("click");
//     alert("test");
// }

// btn.addEventListener("click", function() {
//     console.log("click");
//     alert("test");
// });

var btn = document.getElementById("bouton");
var nombre_1 = document.getElementById("nombre_1");
var nombre_2 = document.getElementById("nombre_2");
var resultat = document.getElementById("resultat");
var operateur = document.getElementById("operateur");


btn.onclick = function() {
    switch (operateur.value) {
        case "*" :
            res = parseInt(nombre_1.value) * parseInt(nombre_2.value);
            break;
        case "/" :
            res = parseInt(nombre_1.value) / parseInt(nombre_2.value);
            break;
        case "+" :
            res = parseInt(nombre_1.value) + parseInt(nombre_2.value);
            break;
        case "-" :
            res = parseInt(nombre_1.value) - parseInt(nombre_2.value);
        default : 
            console.log("error");
            break;
        }

    resultat.innerText = res;
    //console.log(parseInt(nombre_1.value) + parseInt(nombre_2.value));
    //console.log(nombre_2.value);
}
