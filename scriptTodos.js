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


// Ejercicio 3:

function ejercicio3() {
    var sumaResta = prompt("¿quiere sumar o restar?");
    var n1 = parseFloat(prompt("Inserta un numero real."));
    var n2 = parseFloat(prompt("Inserta un numero real que quiera sumar o restar"));

    if (sumaResta == "sumar") {
        alert(n1 + n2)
    } else {
        alert(n1 - n2)
    }

}

// Ejercicio 4:
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
