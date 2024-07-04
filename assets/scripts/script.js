const numeros = document.querySelectorAll('.numeros');
const resultados = document.querySelector('.resultado span');

let primerNumero = "";
let esPrimerNumero = false;
let segundoNumero = "";
let esSegundoNumero = false;
let signo = "";
let resultadoOperacion = "";

for (let i = 0; i < numeros.length; i++) {
    numeros[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if(esPrimerNumero === false){
            getAttribute(atr)
        }
    })
    
}

function getAttribute(el){
    resultados.innerHTML = "";
    primerNumero += el;
    resultados.innerHTML = primerNumero;
    primerNumero = +primerNumero;

}
