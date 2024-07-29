const numeros = document.querySelectorAll('.numeros');
const resultados = document.querySelector('.resultado span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.igual');
const clear = document.querySelector('.borrar');
const negative = document.querySelector('.negativo');
const percent = document.querySelector('.porcentaje');

let primerNumero = "";
let esPrimerNumero = false;
let segundoNumero = "";
let esSegundoNumero = false;
let sign = "";
let resultadoOperacion = 0;

for (let i = 0; i < numeros.length; i++) {
    numeros[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if(esPrimerNumero === false){
            getFirstValue(atr)
        }
        if(esSegundoNumero === false){
            getSecondValue(atr);
        }
    })
    
}
function getFirstValue(el){
    resultados.innerHTML = "";
    primerNumero += el;
    resultados.innerHTML = primerNumero;
    primerNumero = +primerNumero;

}
function getSecondValue(el){
    if(primerNumero != "" && sign != ""){
        segundoNumero += el;
        resultados.innerHTML = segundoNumero;
        segundoNumero = +segundoNumero;
    }
   

}
function getSigno(){
    for(let i = 0; i < signs.length; i++){
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            esPrimerNumero = true;

        })

    }
    
}
getSigno();

equals.addEventListener('click', () => {
    resultados.innerHTML = "";
    if(sign === "+"){
        resultadoOperacion = primerNumero + segundoNumero;
    } else if(sign === "-") {
        resultadoOperacion = primerNumero - segundoNumero;
    } else if(sign === "x") {
        resultadoOperacion = primerNumero * segundoNumero;
    } else if(sign === "/") {
        resultadoOperacion = primerNumero / segundoNumero; 
    }
    resultados.innerHTML = resultadoOperacion;
})


