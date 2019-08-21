//escutando click
const botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();


    const form = document.querySelector("#form-adiciona");
    //Extraindo informacoes do paciente do form
    const paciente = obtemPacienteDoFormulario(form);

    console.log(paciente);

    //cria a tr e a td do paciente
    const pacienteTr = criaPacienteParaTabela(paciente)

    //adicionando o paciente na tabela.
    enviaPacienteParaTabela(pacienteTr)

    limpaFormulario(form)
})


function criaPacienteParaTabela(paciente) {
    let pacienteTr = document.createElement("tr");

    let nomeTd = document.createElement("td");
    let pesoTd = document.createElement("td");
    let alturaTd = document.createElement("td");
    let gorduraTd = document.createElement("td");
    let imcTd = document.createElement("td");

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc();

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr
}

function obtemPacienteDoFormulario(form) {

    let { nome, peso, altura, gordura } = form;
    
    let paciente = new Paciente(
        nome.value,
        peso.value,
        altura.value,
        gordura.value
    )

    return paciente;

}

function enviaPacienteParaTabela(pacienteTr) {
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function limpaFormulario(form) {
    
    let { nome, peso, altura, gordura } = form;

    nome.value = ""
    peso.value = ""
    altura.value = ""
    gordura.value = ""
}