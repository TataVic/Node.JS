//module.exports - primeira forma
const calculadora ={ //exporta objetos virando um método
//objeto
//chave(function): value(parametros) - separado por vírgulas os objetos 
soma:(valor1, valor2) => valor1 + valor2,
subtracao: (valor1, valor2) => parseInt(valor1) - parseInt(valor2),
mutliplicacao: (valor1, valor2) => valor1 * valor2,
divisao:(valor1, valor2) =>(valor1>0 && valor2>0)? parseInt(valor1)/parseInt(valor2):"Não é possível dividir por zero"
}
export default calculadora;
 /* npm init // json. foi adicionado */

//função
//var soma = (valor1, valor2) => valor1 + valor2 
//{ //arrow function 
    /* return */   //melhorias
//} 
//exports.soma = soma

//var subtracao = (valor1, valor2) => parseInt(valor1) - parseInt(valor2)
/* {
    /* return */ 
//} */

/****exports.subtracao = subtracao

var mutliplicacao = (valor1, valor2) => valor1 * valor2
/* {
    /* return */ 
//} */
//exports.mutliplicacao = mutliplicacao

//var divisao = (valor1, valor2) =>parseInt(valor2)>0? parseInt(valor1)/parseInt(valor2):"Não é possível dividir por zero" 
   // erro - && parseInt(valor1)>0? parseInt(valor1)/parseInt(valor2):"Não é possível dividir por zero"
/* var divisao = (valor1, valor2) =>{
    if (parseInt(valor2) > 0 && parseInt(valor1) > 0){
        return parseInt(valor1)/parseInt(valor2)
    }   
        return "Não é possível dividir por zero"
} */
//exports.divisao = divisao 
