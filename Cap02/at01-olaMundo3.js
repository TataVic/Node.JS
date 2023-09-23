//prompt-sync - modulo que recebe entradas de console de modo síncrono
let prompt = require('prompt-sync') 
prompt = prompt({sigint:true})
console.log('Olá Mundo!\r\n')
// var e let são argumentos para declarar variáveis
let nome= prompt('Qual é seu nome? ')
console.log(`Olá ${nome}!\r\n`)
console.log('Olá node!')