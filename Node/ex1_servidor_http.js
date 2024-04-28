var http = require ('http');
x=0;
http.createServer(function (req, resposta)
{
	if(req.url === '/')
	{
	x=x+1;
	console.log('Recebi pedido ', x);
	/*resposta.writeHead(500, {'Content-Type':'text/html'});*/
	resposta.end('Sim, estou aqui na porta 1235!');
	}
	
}).listen(1235);