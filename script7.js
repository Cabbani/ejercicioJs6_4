//hecho en clase : en referencias el ejercico 5 de js,


const USER = 'jose';
const PASS = '1234';
let attempts = 3; // contador menos 1 este caso
let inputuser;
let inputpass;

do {
    inputuser = prompt('Escribe tu usuario');
    inputpass = prompt('Escribe tu contraseña');
    attempts--
} while ((inputuser != USER ||  inputpass != PASS) && attempts > 0); 



















