$(document).ready(function(){
mostrar_datos()
})
function mostrar_datos()
{
	$.ajax({
		url: '/grafica',
		type: 'POST',
		success: function(datos){
			var obj = jQuery.parseJSON(datos);
			console.log(obj);
			//$(".jumbotron").html(obj)
		},
		error: function(error){
			console.log(error);
		}
	});
}
