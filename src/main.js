import GeraCPF from './modules/GeraCPF'
import './assets/css/style.css'


const btnCpf = document.querySelector('.btn-cpf')

btnCpf.addEventListener('click', (e) => {
    const gera = new GeraCPF()
    const cpfGerado = document.querySelector('.cpf-gerado')
    cpfGerado.innerHTML = gera.geraNovoCPF()

})
