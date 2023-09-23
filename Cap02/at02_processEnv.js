//importação de os - já vem instalado por ser nativo 
const os = require('os')
console.log('Processadores: ', os.cpus())
console.log('Memória Livre: ', os.freemem())
//console.log('arquitetura: ', os.arch())
console.log('Diretório de usuário: ', os.homedir())
console.log('Familia do SO: ', os.type())
//console.log("network", os.networkInterfaces())
//tanto aspas simples quanto as duplas, funcionam