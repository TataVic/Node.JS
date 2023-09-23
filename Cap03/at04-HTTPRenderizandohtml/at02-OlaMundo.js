const http = require('http')
const url = require('url')
const fs = require('fs')

const porta = 3200
const server = http.createServer((req, res)=>{
    const q = url.parse(req.url, true) //pega a string da url que está na porta e transmuta a string da url
    let pagina = q.pathname.substring(1) //aponta uma url unica para o index.html
   /*  console.log(q) //aponta uma url unica para o index.html
    console.log(pagina) */
    pagina = pagina == ''? 'index.html':pagina
    if (fs.existsSync(pagina)){ //Verifica o arquivo existe
        fs.readFile(pagina, function(err, data){
            res.writeHead(200, {'Content-Type':'usuario/html'})
            res.write(data)
            return res.end()
            }) 
    } 
    else {
        fs.readFile('404.html', function(err, data){
        res.writeHead(404, {'Content-Type':'404/html'})
        res.write(data)
        return res.end()
        }) 
    }        

})
server.listen(porta,()=>{
    console.log("Servido rodando em http://localhost:"+porta)
})


//Cria o serviço HTTP, e passa callback que processa as requisições.
/* const server = http.createServer((req, res)=>{//Configura o cabeçalho da resposta
res.setHeader('Contenty-Type', 'text/html')
//Responde a requisição
res.end(`Olá mundo!!!`)
})
//Ativa o servidor para escutar as requisições
server.listen('3200', ()=>{console.log('Servidor rodando...')})
 */



/* const http = require('http')
//Cria o serviço HTTP, com callback que processa e responde as requisições.
 const server = http.createServer((req, res)=>{
//Configura o cabeçalho da resposta
 res.setHeader('Contenty-Type', 'text/html')
//Responde a requisição
 res.end(`
 <head> <meta charset="UTF-8"></head>
 <body>
 <h1>Olá Mundo!!!</h1>
 </body>
 `)
 })
//Ativa o servidor para escutar as requisições
 server.listen('3200', ()=>{console.log('Servidor rodando...')}) */