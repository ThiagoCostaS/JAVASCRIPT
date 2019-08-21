

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll(".paciente");


for(i=0; i < pacientes.length; i++){
   
    let pacienteNode = pacientes[i];
    let paciente = new Paciente();

    let tdPeso = pacienteNode.querySelector(".info-peso");
    paciente.peso = tdPeso.textContent ;
    
    let tdAltura = pacienteNode.querySelector(".info-altura");
    paciente.altura = tdAltura.textContent;
    
    let tdImc = pacienteNode.querySelector(".info-imc");
    
    
    let pesoValido = true;
    let alturaValida = true;
    
    
    if (paciente.peso <= 0  || paciente.peso >= 1000){
        alert("Peso Invalido");
        pesoValido = false;
        pacienteNode.classList.add("paciente-invalido");
        }
    
    if (paciente.altura <= 0  || paciente.altura >= 3.00){
        alert("Altura Invalida");
        alturaValida = false;
        pacienteNode.classList.add("paciente-invalido");
    
    }
    
    if(alturaValida && pesoValido){
        tdImc.textContent = paciente.imc();  
    }

}


