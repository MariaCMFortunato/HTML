const express = require("express");
const app = express();
app.use(express.static(__dirname));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.get("/ola", (req, resposta)=> {
	var x = 43;
	for (var i=0;i<3; i++)
		x=x+i;
	resposta.send("ola "+ x);
});
//localhost:1234/43
app.get('/:id', function(req, res)
{
	res.send('O id é ' + req.params.id);
});
//localhost:1234/nome/luis/8
app.get('/nome/:nome/:id', function(req, res)
{
	res.send('id: '+ req.params.id + ' e nome: '+req.params.nome);
});
//localhost:1234/soma/2/3
app.get("/soma/:n1/:n2", function(req, res)
{
	var soma = parseInt(req.params.n1)+parseInt(req.params.n2);
	res.send('soma: ' + req.params.n1 + '+' + req.params.n2 + ' = ' + soma);
});

app.listen(1234, () => {
	console.log("Estou à escuta");
});