// Ordena alfabéticamente un array con 7 palabras, puedes usar el algoritmo de la burbuja
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
  console.log(palabras); // la lista ordenada