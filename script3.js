// 3. Suma o resta (según elija el usuario) dos números reales

/*
var sumaResta = prompt("¿quiere sumar o restar?");
var n1 = parseFloat(prompt("Inserta un numero real."));
var n2 = parseFloat(prompt("Inserta un numero real que quiera sumar o restar"));

if (sumaResta == "sumar") {
    alert(n1 + n2)
} else {
    alert(n1 - n2)
}
*/


// Hacer switch que esta en slack de jorge!!


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



/*
var sumaResta = prompt("¿quiere sumar o restar?");
var n1 = parseFloat(prompt("Inserta un numero real."));
var n2 = parseFloat(prompt("Inserta un numero real que quiera sumar o restar"));

if (sumaResta == "sumar") {
    alert(n1 + n2)
} else {
    alert(n1 - n2)
}
*/
