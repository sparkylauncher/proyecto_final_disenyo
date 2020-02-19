var x=$(document);
x.ready(inicializarEventos);
var contenido;
var sizeFuenteOriginal;

function inicializarEventos(){
	var y;
	contenido = $(".contenido");
	sizeFuenteOriginal = contenido.css('font-size');
	y=$("#aumentar");
	y.click(aumentarfuente);
	y=$("#reducir");
	y.click(reducirfuente);
	y=$("#resetFuente");
	y.click(resetfuente);
	$( function() {
		$( document ).tooltip();
  } );

	$( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
  } );
}


function aumentarfuente(){	
	var sizeFuenteActual = contenido.css('font-size');
	var sizeFuenteActualNum = parseFloat(sizeFuenteActual, 10);
	var sizeFuenteNuevo = sizeFuenteActualNum*1.2;
	contenido.css('font-size', sizeFuenteNuevo);

}

function reducirfuente(){
	var sizeFuenteActual = contenido.css('font-size');
	var sizeFuenteActualNum = parseFloat(sizeFuenteActual, 10);
	var sizeFuenteNuevo = sizeFuenteActualNum*0.8;
	contenido.css('font-size', sizeFuenteNuevo);
}

function resetfuente(){
	contenido.css('font-size', sizeFuenteOriginal);
}