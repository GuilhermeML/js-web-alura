
var titulo = document.querySelector(".titulo"); // Retorna o conteúdo das tag com uma classe definida do css
//console.log(titulo);
//console.log(titulo.textContent); // Retorna o valor dentro da tag
titulo.textContent = "Aparecida Nutricionista";

//AULA 2x01
var paciente = document.querySelector("#primeiro-paciente");

var pacientes = document.querySelectorAll(".paciente"); //AULA 3x01
//console.log(pacientes);

for(var i = 0; i < pacientes.length; i++){
    //console.log(pacientes[i]);

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    //--AULA 2X03
    var pesoEhValido = true;
    var alturaEhValido = true;

    if(peso < 0 || peso > 300){
        //console.log("Peso inválido.");
        tdImc.textContent = "Peso inválido";
        pesoEhValido = false;
        //paciente.style.backgroundColor = "lightcoral"; //AULA 3x02
        paciente.classList.add("paciente-invalido");
    }

    if(altura < 0 || altura > 3.00){
        tdImc.textContent = "Altura inválida";
        //console.log("Altura inválida.");
        alturaEhValido = false;
        paciente.classList.add("paciente-invalido");
    }

    if(alturaEhValido == false && pesoEhValido == false){
        tdImc.textContent = "Altura e Peso inválidos";
        paciente.classList.add("paciente-invalido");
    }

    if(alturaEhValido == true && pesoEhValido == true){
        imc = calcularImc(peso, altura);    //AULA 5x02
        //console.log(imc);
        tdImc.textContent = imc;
    }
}

function calcularImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}
