class Paciente {

    constructor(nome, peso, altura, gordura) {
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
}