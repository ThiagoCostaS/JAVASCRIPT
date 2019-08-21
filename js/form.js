//escutando click
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();


    var form = document.querySelector("#form-adiciona");
    //Extraindo informacoes do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    console.log(paciente);

    var form = document.querySelector("#form-adiciona");
    //Extraindo informacoes do paciente do form
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    //cria a tr e a td do paciente
    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso, altura);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    //adicionando o paciente na tabela.
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

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
})