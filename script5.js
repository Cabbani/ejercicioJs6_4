// 5. Solicita al usuario una letra, si inserta una a muestra el número 7, si es una b, el 9, si es una c el 101 y si no es ninguno de los tres, indícale que se ha equivocado de letra

let letra = prompt("Inserte un letra")
if (letra == "a") {
    alert("7");
} else {
    if (letra == "b") {
        alert("9");
    } else {
        if (letra == "c") {
            alert("101");
        }
        else {
            alert("Te has equiviado de letra");
        }

    }

}
// aqui hay que hacer un switch: