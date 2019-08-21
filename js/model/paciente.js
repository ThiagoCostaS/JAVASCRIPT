class Paciente {

    constructor(nome = undefined, peso = undefined, altura = undefined, gordura = undefined) {
        this._nome = nome
        this._peso = peso
        this._altura = altura,
            this._gordura = gordura
    }

    get nome() {
        return this._nome
    }

    set nome(value) {
        this._nome = value
    }

    get peso() {
        return this._peso
    }

    set peso(value) {
        this._peso = value
    }

    get altura() {
        return this._altura
    }

    set altura(value) {
        this._altura = value
    }

    get gordura() {
        return this._gordura
    }

    set gordura(value) {
        this._gordura = value
    }

    imc() {
        let imc = 0;
        imc = this._peso / (this._altura * this._altura);
        return imc.toFixed(2);
    }
}