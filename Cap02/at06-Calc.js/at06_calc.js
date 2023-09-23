//Calculadora - função para virar um módulo
//funções de métodos de verificação isnumber/tryparser

/* function soma(valor1, valor2){
    return valor1 + valor2
}
function subtracao(valor1, valor2){
    return parseInt(valor1) - parseInt(valor2)
}
function mutliplicacao(valor1, valor2){
    return valor1 * valor2
}
function divisao(valor1, valor2){
    if (parseInt(valor2) > 0 && parseInt(valor1) > 0){
        return parseInt(valor1)/parseInt(valor2)
    }   
        return "Não é possível dividir por zero"
        /* if(valor2 == 0 || valor1 == 0){
            return "Erro, dividir por zero não é possível!"
        }
        else{
            return valor1/valor2
        } */
//}
/* let resultado
resultado = soma(10,5)
console.log('soma: ', resultado)
resultado = subtracao(20,10)
console.log('subtração: ', resultado)
resultado = mutliplicacao(10,5)
console.log('multiplicação: ', resultado)
resultado = divisao(10,5)
console.log('divisão: ', resultado)

console.log('subtraçao: ', subtracao(10,5)) //pode ser simplificada assim tbm
console.log("divisão: ", divisao(5,20))
console.log("divisão: ", divisao(0,20))
console.log("divisão: ", divisao(5,0))
console.log("letras: ", divisao('asdf,bvc')) //letras assim entra como posição 0 */


import calc from './calculadora.js'
//require e exports 
/*const calc = require('./calculadora.js') */ //pega a lógica do outro arquivo - commonjs
console.log('soma: ', calc.soma(10,5)) 
console.log('subtraçao: ', calc.subtracao(10,5)) 
console.log('multiplicação: ', calc.mutliplicacao(10,5)) 
console.log("divisão: ", calc.divisao(5,20))
console.log("divisão: ", calc.divisao(0,20)) //esse está imprimindo errrado 
console.log("divisão: ", calc.divisao(5,0))