

// 1. Solicita al usuario tres números enteros e indícale cuál es el menor.


function ejercicio1() {
    var n1 = parseInt(prompt("Inserta un número"));
    var n2 = parseInt(prompt("Inserta un número"));
    var n3 = parseInt(prompt("Inserta un número"));

    if (n1 < n2 && n1 < n3) {
        alert(n1);
    }
    else if (n2 < n1 && n2 < n3) {
        alert(n2);
    }
    else if (n3 < n1 && n3 < n2) {
        alert(n3);
    }
}


// si no me funciona llamar la funcion con nombre funcio ()

// 2.Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.


function ejercicio2() {
    var frase = prompt("Inserta una frase.");
    var letra = prompt("Inserta una letra.");
    let numeroLetra = 0; // = a contador que inicializamos en cero.
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] == letra) {
            numeroLetra += 1;
            //numeroLetra = numeroLetra + 1;
            //numeroLetra++;
        }
    }
    alert(numeroLetra);

}
ejercicio2();


// Ejercicio 3: Suma o resta (según elija el usuario) dos números reales


function ejercicio3() {
    var sumaResta = prompt("¿quiere sumar o restar?");
    var n1 = parseFloat(prompt("Inserta un numero real."));
    var n2 = parseFloat(prompt("Inserta un numero real que quiera sumar o restar"));
    var total;


    switch (sumaResta) {
        case "+":
            total = n1 + n2;
            break;
        case "2":
            total = n1 - n2;
            break;

        default:
            total = "Operacion no valida";
            break;
    }

    if (typeof (total) == "number") {
        alert("Tu resultado es " + total)
    } else {
        alert(total)
    }


}

// Ejercicio 4:
// Almacena en dos variables datos de validación (usuario y contraseña) correctos y permite que el usuario valide (dispone de 3 intentos)

// Ciclo para validar un Form:


function ejercicio4() {
    let loggedin = false;
    let attempt = 3;

    while (!loggedin && attempt > 0) {
        let userName = prompt("Usuario", "");
        let passWord = prompt("Contraseña", "");
        if (userName + passWord == martin123) {

            loggedin = true;
            alert("!Has entrado¡");
        }
        else {
            attempt--;
            alert("Te quedan" + attempt + "Intentos");
            if (attempt == 0) {
                alert("Has sido bloqueado");
            }
        }
    }

}

// Ejercicio 5:
// 5. Solicita al usuario una letra, si inserta una a muestra el número 7, si es una b, el 9, si es una c el 101 y si no es ninguno de los tres, indícale que se ha equivocado de letra


function ejercicio5() {
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
}

// Ejercicio 6:  
// Ordena alfabéticamente un array con 7 palabras, puedes usar el algoritmo de la burbuja


function ejercicio6() {
    var palabras = [
        "hola",
        "buenos",
        "como",
        "estas",
        "hoy",
        "hace",
        "mucho",
        "frio",
    ];
    var n, i, k, aux;
    n = palabras.length;
    console.log(palabras); //  la lista desordenada
    for (k = 1; k < n; k++) {
        for (i = 0; i < n - k; i++) {
            if (palabras[i] > palabras[i + 1]) {
                aux = palabras[i];
                palabras[i] = palabras[i + 1];
                palabras[i + 1] = aux;
            }
        }
    }
    console.log(palabras);  // la lista ordenada
}

ejercicio6();
