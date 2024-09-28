let filaComum = JSON.parse(localStorage.getItem("filaComum")) || [];
let filaEspecial = JSON.parse(localStorage.getItem("filaEspecial")) || [];
let contadorComum = JSON.parse(localStorage.getItem("contadorComum")) || 1;
let contadorEspecial = JSON.parse(localStorage.getItem("contadorEspecial")) || 1;

function atualizarFilas() {
    document.getElementById("filaComum").innerText = filaComum.length ? filaComum.join(", ") : "Nenhuma senha";
    document.getElementById("filaEspecial").innerText = filaEspecial.length ? filaEspecial.join(", ") : "Nenhuma senha";

    localStorage.setItem("filaComum", JSON.stringify(filaComum));
    localStorage.setItem("filaEspecial", JSON.stringify(filaEspecial));
}

function gerarSenhaComum() {
    let senhaComum = 'C' + contadorComum.toString().padStart(3, '0'); 
    filaComum.push(senhaComum);
    contadorComum++;
    
    localStorage.setItem("contadorComum", contadorComum);
    
    atualizarFilas();
}

function gerarSenhaEspecial() {
    let senhaEspecial = 'E' + contadorEspecial.toString().padStart(3, '0'); 
    filaEspecial.push(senhaEspecial);
    contadorEspecial++;
    
    localStorage.setItem("contadorEspecial", contadorEspecial);
    
    atualizarFilas();
}

function atenderSenhaComum() {
    if (filaComum.length > 0) {
        let senhaAtendida = filaComum.shift(); 
        document.getElementById("senhaAtendida").innerText = "Comum " + senhaAtendida;
    } else {
        alert("Nenhuma senha comum para atender.");
    }
    atualizarFilas();
}

function atenderSenhaEspecial() {
    if (filaEspecial.length > 0) {
        let senhaAtendida = filaEspecial.shift();  
        document.getElementById("senhaAtendida").innerText = "Especial " + senhaAtendida;
    } else {
        alert("Nenhuma senha especial para atender.");
    }
    atualizarFilas();
}

window.onload = function() {
    atualizarFilas();
}
