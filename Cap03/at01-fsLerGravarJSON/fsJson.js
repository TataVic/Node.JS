const fs = require('fs') 
module.exports = {
    lerJSON: (arquivo)=>{
    //Lê arquivos de texto de forma síncrona
    let json = fs.readFileSync(arquivo, 'utf8') //leia o arq de modo síncrono
    return json
    },
    converterJSON_Obj: (json)=>{
    //Converte string JSON para um objeto javaScript
    let dados = JSON.parse(json)
    return dados
    },
    converterObj_JSON:(dados)=>{
    //Converte objeto JavaScript para uma string JSON
    let json = JSON.stringify(dados)
    return json
    },
    salvarJSON:(json, arquivo)=>{
        //Grava arquivos de texto de forma síncrona
    fs.writeFileSync(arquivo, json)
    }
   //obg literal - CRUD 
   // -> json é uma string que transmuta para objetos e sua comunicação (requisição - string+lógica (Json) - json em objeto) 
 }