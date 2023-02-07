
// 2.Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.


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






