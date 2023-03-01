let menuVisible = false;
// ESTA FUNCION ES PARA ABRIR Y CERRAR LA BARRA DE MENÚ /
function mostrarOcultarMenu(){
    if(menuVisible){
        document. getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document. getElementById("nav").classList = "responsive";
        menuVisible = true;
    }

}

// ESTA FUNCION ES PARA QUE SE CIERRE EL MENÚ CUANDO HACEMOS CLICK EN UNA OPCION //

function seleccionar(){
    document.getElementById("nav").classList = "nav";
    menuVisible = false;
}




