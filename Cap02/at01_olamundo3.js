//prompt sync : npm install nome -g (global) e depois link
let prompt = require('prompt-sync')
prompt = prompt({sigint:true}) //relação a parar o código: 
console.log('olá mundo!!\r\n')
//var e let - declaração de variaveis
var nome = prompt('qual seu nome? ')
console.log(`Ola ${nome}!\n\r`)
console.log('olá node, teste de sincrono!')
