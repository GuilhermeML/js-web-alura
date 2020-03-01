
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); // AULA 3x02
    
    var form = document.querySelector("#form-adiciona");

    //Extraindo informacoes do paciente do form
    var paciente = obtemPacienteDoFormulario(form);
    var erros = validarPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    adicionarPacienteNaTabela(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagem-erro");
    mensagensErro.innerHTML = "";
});

function adicionarPacienteNaTabela(paciente){
    //Cria a Tr e a Td
    var pacienteTr = montaTr(paciente);
    //Adiciona paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";  //AULA 6X03

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}

function obtemPacienteDoFormulario(form){
    
    var paciente = {            //AULA 5x03 - criar o objeto
        nome: form.nome.value,  //AULA 3x03 - utilizar o "name" da tag
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }
    
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validarPaciente(paciente){

    var erros = []; // AULA 6x02

    if(paciente.nome.length == 0){
        erros.push("O nome não pode estar em branco.");
    }

    if(!validarPeso(paciente.peso)){
        erros.push("Peso é inválido.");
    }

    if(!validarAltura(paciente.altura)){
        erros.push("Altura é inválida.");
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode estar em branco.");
    }

    if(paciente.peso.length == 0){
        erros.push("O peso não pode estar em branco.");
    }

    if(paciente.altura.length == 0){
        erros.push("A altura não pode estar em branco.");
    }

    return erros;
}
