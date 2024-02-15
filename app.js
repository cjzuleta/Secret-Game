//cnx con dom 
//VARIABLE PARA MODIFICAR EL H1 
/*let titulo = document.querySelector('h1');//esto ya es un objeto
titulo.innerHTML = 'Juego de Numeros';//se llama metodo del objeto*/

//VARIABLE PARA MODIFICAR EL parrafo
/*let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Ingresa un numero del 1 al 10';*/

//variables
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numMaximo = 10;

//console.log(numeroSecreto);

//funcion para generar num aleatorio
function numeroAleatorio() {
    //return Math.floor(Math.random()*10)+1;
    let numeroGenerado = Math.floor(Math.random()*numMaximo)+1;

   console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    if(listaNumeroSorteado.length == numMaximo){
        modificarTextoElemento('p','haz llegado al maximo de numeros a sortear');
    }else {
    //si el numero esta incluido en la lista ejecuta de nuevo la busqueda de otro numero
    if(listaNumeroSorteado.includes(numeroGenerado)){
        return numeroAleatorio();
    } else {//si no esta en la lista lo agrega y ejecuta el juego con el num
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
        
    }
}
}

//optimizando codigo con una funcion con parametros
function modificarTextoElemento (elemento, texto){
    let elementoModificar = document.querySelector(elemento);
    elementoModificar.innerHTML = texto;
}


//evento onclick en html llando funcion
function leerValor(){
    let numeroUser = parseInt(document.getElementById('valorNumero').value);
    /*console.log(typeof(numeroUser));
    console.log(numeroUser);
    console.log(typeof(numeroSecreto));
    console.log(numeroUser === numeroSecreto);*/
    console.log(typeof(numeroSecreto));
    if(numeroUser === numeroSecreto){
        modificarTextoElemento('p',`Acertó el numero "${numeroSecreto}" en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        //si acerto habilitar boton nuevo juego
        document.getElementById('reiniciar').removeAttribute('disabled');
        //si intenta varias veces
    } else if (numeroUser > numeroSecreto){
        modificarTextoElemento('p','El numero ingresado es mayor');
    } else {
        modificarTextoElemento('p','El numero ingresado es menor');
    }
    intentos++;
    limpiar();
}

//funcion para limpiar caja de ingreso de numero
function limpiar() {
    document.querySelector('#valorNumero').value= '';
}

//mejoramos codigo no hay q volver a declarar variables
function condicionesIniciales(){
    modificarTextoElemento('h1','Juego de Numeros');
    modificarTextoElemento('p',`Ingresa un numero del 1 al ${numMaximo}`);
    numeroSecreto = numeroAleatorio();
    intentos = 1;
}

//resetear valores
function reiniciarJuego(){
    //limpia caja de texto
    limpiar();
    //resetear parrafos, intentos y numeroaleatorio
    condicionesIniciales();
    //deshabilitar boton nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();






