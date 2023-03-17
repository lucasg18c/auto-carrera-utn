const ID_TXT_DOMINIO = "txtDominios";
const KEY_STORAGE = "dominioUTN";
const ID_LBL_EL_ARROBA = "elArroba";

let txtDominios = document.getElementById(ID_TXT_DOMINIO);

if (txtDominios) {
    let dominioUsuario = localStorage.getItem(KEY_STORAGE);
    let lblElArroba = document.getElementById(ID_LBL_EL_ARROBA);
    
    lblElArroba.style.paddingRight = "10px";
    
    if (dominioUsuario) {
        txtDominios.value = dominioUsuario;
        lblElArroba.style.fontSize = "14px";
        lblElArroba.innerText = "😎";
        lblElArroba.title = `La última vez que iniciaste sesión, elegiste ${dominioUsuario}.
        \nPodés cambiarlo libremente, y lo recoradé para tu próximo inicio. 😉`
    }
    else {
        lblElArroba.innerText = "👋 @";
        lblElArroba.title = `Hola! Esta es la primera vez que usás la extensión?
        \nUsarla es fácil! Solo elegí tu dominio, y nosotros haremos el resto. 😄`
    }
    
    txtDominios.addEventListener("change", () => {
        localStorage.setItem(KEY_STORAGE, txtDominios.value);
        lblElArroba.style.fontSize = "11px";
        lblElArroba.innerText = "Anotado 😉";
        lblElArroba.title = `La próxima vez que estés por iniciar sesión, ya dirá ${txtDominios.value}. 😁`
    })
}