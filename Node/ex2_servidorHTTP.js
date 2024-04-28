var http = require ('http');
x=0;
function Textozinho()
{
	return "textozinho";
}
http.createServer(function (pedido, resposta)
{
	console.log('Mais um pedido ');
	resposta.writeHead(200, {'Content-Type':'text/html'});
	var x = Textozinho();
	resposta.write('<h1>Ol&aacute;, sou um '+x+ ' em html</h1><h2>Sou HTML</h2>');
	resposta.end('Sim, estou aqui na porta 1234!');
	
}).listen(1234);