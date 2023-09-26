/*
Navigator: este objeto va contener informacion como por ejemplo: si las cookies estan activadas,
va contener informacion del lenguaje que tiene el usuario en su navegador.
*/

// 1.- Mostrar en consola si el usuario tiene las cookies activadas o no
console.log('Cookies activadas: ', navigator.cookieEnabled); // cookieEnabled: con esta propiedad vamos a poder detectar si las cookies estan activadas o no

// 2.- Mostrar informacion del navegador
console.log(navigator.userAgent); // userAgent: devuelve informacion acerca del navegador web

// 3.- Mostrar el lenguaje del navegador
console.log(navigator.language); // language: devuelve el lenguaje del navegador

// 4.- Ver si el navegador web esta conectado a internet o no
console.log(navigator.onLine); // onLine: permite detectar si el navegador web esta conectado a internet o no

