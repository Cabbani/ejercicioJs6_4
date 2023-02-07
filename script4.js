let loggedin = false;
let attempt = 3;

// Ciclo para validar Form.

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







// let i = 0;
// while (i < 3) {
//   i += 1;
//   let userAttempt = prompt("Inserta usuario");
//   let passwordAttempt = prompt("Inserta password");
//   if (userAttempt == user && passwordAttempt == password) {
//     alert("contraseña y usuario correcto, puedes pasar");
//   } else {
//     /*if (i == 3) {
//       alert("demasiadas veces");
//     } else {*/
//     alert("incorrecto, intentalo de nuevo");
//   }
// }
// //}

