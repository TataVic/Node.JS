//require-função de realizar a importar os móduolos do pacote readline
const readline = require('readline')
const rl = readline.createInterface({ //forma assíncrona
    input: process.stdin,
    output: process.stdout
})
console.log('Olá Mundo') //exibir no console
rl.question('qual seu nome?\n', nome =>{ //question - mostra msg e captura string
    console.log(`Ola ${nome}!`) //template string - interpolação (crase)
    rl.close() // fechar a question e imprimir 
})
console.log('olá node, teste assíncrono!')