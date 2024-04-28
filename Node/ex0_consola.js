function exemplo()
{
	console.log("teste");
	//setTimeout(exemplo,5000);
}
function inicio()
{
	//setTimeout(exemplo,5000);
	setInterval(exemplo,5000);
}
inicio();

/*exemplo();
function exemplo()
{
	var x=3;
	x=x+1;
	var i=0;
	for(i=0;i<10;i++)
		console.log("Olá "+x+" "+i);
}*/