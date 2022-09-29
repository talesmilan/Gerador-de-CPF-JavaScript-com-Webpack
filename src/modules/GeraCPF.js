import ValidaCPF from './ValidaCPF'

export default class GeraCPF {
    // Cria um número aleatório de 9 digitos e converte para String
    numeroAleatorio(minimo = 100000000, maximo = 999999999) {
        return String(Math.floor(Math.random() * (maximo - minimo) + minimo))
    }
    // Cria os ultimos dois digitos do CPF
    geraNovoCPF() {
        const cpfSemDigito = this.numeroAleatorio()
        const penultimoDigito = ValidaCPF.criaDigito(cpfSemDigito)
        const ultimoDigito = ValidaCPF.criaDigito(cpfSemDigito + penultimoDigito)
        const cpfCompleto = cpfSemDigito + penultimoDigito + ultimoDigito
        return this.formatado(cpfCompleto)
    }
    // Formata o número do CPF
    formatado(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        )
    }
}