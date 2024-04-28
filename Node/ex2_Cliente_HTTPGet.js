const http = require('http');
let x = 0;
while (x <3){
	x=x+1;
	http.get('http://www.google.com', (resposta)=> {
	var dados = "";
	resposta.on('data', (maisUmBocado) => {
		dados = dados+maisUmBocado;
	});
	resposta.on('end', () => {
		console.log("Dados enviados pelo servidor:"+dados);
	});
	}).on('error', (error) => {
	console.eror('Erro: §{error.message}');
	});
}

