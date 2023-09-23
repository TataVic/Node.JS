const path = require('path') //import e using 
let arq =  './at03_Path.js'
console.log("extensão: ", path.extname(arq))
console.log("nome completo: ", path.basename(arq))
console.log("unidade base: ", path.dirname(arq))
console.log("caminho absoluto: ", path.resolve(arq))
//visualização dos detalhes do arquivo, tu utiliza a variavél
