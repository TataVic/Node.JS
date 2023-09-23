const rwJSON = require('./fsJson.js') //Importação do módulo criado fsJSON
let arquivo = './alunos.json' //Dados a serem gravados
let obj = {
nome: 'Guilherme',
nota1:1,
nota2:2.5,
nota3:3,
nota4:9
}
var json = rwJSON.lerJSON(arquivo) //Leitura e carga de um arquivo JSON
console.log('Arquivo Json: ' ,json)
console.log('Objeto:', obj)
var dados = rwJSON.converterJSON_Obj(json)
console.log('dados:', dados)
//a parte como forma de interar sobre nome de usuários no arquivo json:
dados=[...dados]
console.log(dados.nome)
dados.nome="tataat"
console.log(dados)
dados.push(obj)
console.log("push:",dados)
json = rwJSON.converterObj_JSON(dados)
console.log(json)
rwJSON.salvarJSON(json, arquivo)
/* console.log(dados[0].nome);
dados[0].nome = "tauanivitoria" //so inseri o nome no json
console.log[dados] */
/* console.log('Arquivo Json: ' ,json)
console.log('Objeto:', obj)
 */

//Conversão de string JSON em um objeto javaScript
/* var dados = rwJSON.converterJSON_Obj(json)
console.log(dados) */
//Inserção de novo registro
/* dados.push(obj)
console.log(dados) */
//Conversão do obj atualizado para JSON
/* json = rwJSON.converterObj_JSON(dados)
console.log(json) */
//Regravação do arquivo com dados atualizados
/* rwJSON.salvarJSON(json, arquivo) */