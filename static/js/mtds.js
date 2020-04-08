$(document).ready(function(){
	$( "#mtd" ).change(function() {
		console.log($("#mtd").val())
    interfaz_casos($("#mtd").val());
});

})

function interfaz_casos(valor)
{

	switch(valor) {
    case '1':
			interfaz_caso1()
			apha=$( "#apha").slider( "value" );
			beta=$( "#beta").slider( "value" );
			tiempo=$( "#tiempo").slider( "value" );
			id_grafica=$("#cbx_tp_gr").val();
			frk_4(apha,beta,gamma=0,tiempo,valor,id_grafica)
			$( "#cbx_tp_gr" ).change(function() {
				id_grafica=$("#cbx_tp_gr").val();
				frk_4(apha,beta,gamma,tiempo,valor,id_grafica)
		});
        break;
    case '2':
        interfaz_caso2()
				apha=$( "#apha").slider( "value" );
				beta=$( "#beta").slider( "value" );
				tiempo=$( "#tiempo").slider( "value" );
				id_grafica=$("#cbx_tp_gr").val();
				frk_4(apha,beta,gamma=0,tiempo,valor,id_grafica)
				$( "#cbx_tp_gr" ).change(function() {
					id_grafica=$("#cbx_tp_gr").val();
					frk_4(apha,beta,gamma,tiempo,valor,id_grafica)
			});

        break;
		case '4':
		    interfaz_caso4()
				apha=$( "#apha").slider( "value" );
				gamma=$( "#gamma").slider( "value" );
				beta=$( "#beta").slider( "value" );
				tiempo=$( "#tiempo").slider( "value" );
				id_grafica=$("#cbx_tp_gr").val();
				frk_4(apha,beta,gamma,tiempo,valor,id_grafica)
				$( "#cbx_tp_gr" ).change(function() {
					id_grafica=$("#cbx_tp_gr").val();
					frk_4(apha,beta,gamma,tiempo,valor,id_grafica)
			});

		    break;
    default:
        break;
}
}


function interfaz_caso1()
{
	removeModel();

	interfaz='<form>\
						<fieldset>\
						<div class="col-md-6">\
						<label id="U"></label>\
						</div>\
						<div class="col-md-6">\
						<input  id="V0" class="form-control" placeholder="V0" value="29360" required autofocus disabled>\
						</div>\
						<div class="col-md-6">\
						<label id="HAA"></label>\
						</div>\
						<div class="col-md-6">\
						<input  id="W0" class="form-control" placeholder="W0" value="9030" required autofocus disabled>\
						</div>\
						<div class="col-md-6">\
						<label id="HAa"></label>\
						</div>\
						<div class="col-md-6">\
						<input  id="X0" class="form-control" placeholder="X0" value="27210" required autofocus disabled>\
						</div>\
						<div class="col-md-6">\
						<label id="OAA"></label>\
						</div>\
						<div class="col-md-6">\
						<input  id="Y0" class="form-control" placeholder="Y0" value="12410" required autofocus disabled>\
						</div>\
						<div class="col-md-6">\
						<label id="OAa"></label>\
						</div>\
						<div class="col-md-6">\
						<input  id="Z0" class="form-control" placeholder="Z0" value="21990" required autofocus disabled>\
						</div>\
						<div class="col-md-6">\
						<label id="p1">p:</label>\
						</div>\
						<div class="col-md-6">\
						<input  id="p" class="form-control" placeholder="p" value="0.46" required autofocus disabled>\
						</div>\
						<div class="col-md-6">\
						<label id="q1">q:</label>\
						</div>\
						<div class="col-md-6">\
						<input  id="q" class="form-control" placeholder="q" value="0.54" required autofocus disabled>\
						</div>\
						<div class="col-md-6">\
						<label id="mu1_t"></label>\
						</div>\
						<div class="col-md-6">\
						<input  id="mu1" class="form-control" placeholder="mu1" value="0.0082" required autofocus disabled>\
						</div>\
						<div class="col-md-6">\
						<label id="mu2_t"></label>\
						</div>\
						<div class="col-md-6">\
						<input  id="mu2" class="form-control" placeholder="mu2" value="0.0156" required autofocus disabled>\
						</div>\
						</fieldset>\
						<fieldset>\
						<div class="col-md-6">\
						<label id="n_t"></label>\
						</div>\
						<div class="col-md-6">\
						<input name="n" id="n" class="form-control" value="500" placeholder="Numero de iteraciones" required autofocus disabled>\
						</div>\
						</fieldset>\
						<br>\
						<div class="col-md-12">\
						<div id="apha"></div>\
						<p>\
						<label id="apha_t"></label>\
						<input type="text" id="n_apha" readonly style="border:0; color:#f6931f; font-weight:bold;">\
						</p>\
						<div id="beta"></div>\
						<p>\
						<label id="beta_t"></label>\
						<input type="text" id="n_beta" readonly style="border:0; color:#f6931f; font-weight:bold;">\
						</p>\
						<div id="tiempo"></div>\
						<p>\
						<label id="tiempo_t">tiempo:</label>\
						<input type="text" id="n_tiempo" readonly style="border:0; color:#f6931f; font-weight:bold;">\
						</p>\
						</div>\
						</form>'

	tabla='<table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%" hidden>\
    <thead>\
        <tr>\
            <th>N</th>\
            <th>Uaa</th>\
						<th>HAA</th>\
						<th>HAa</th>\
						<th>OAA</th>\
						<th>OAa</th>\
        </tr>\
    </thead>\
</table>'


cabecera='<select class="form-control" id="cbx_tp_gr">\
						<option  value="1" selected>t vs P</option>\
						<option  value="2">HAA vs OAA</option>\
						<option  value="3">HAa vs OAa</option>\
				</select>'

grafica='<div  id="dv_grf">\
	</div>'

$('#tp_graf').append(cabecera)
$('#tb_mtd').append(tabla)
$('#bdy_mtd').append(interfaz)
$('#gf_mtd').append(grafica)

katex.render('U_{aa}:', document.getElementById('U'));
katex.render('H_{AA}:', document.getElementById('HAA'));
katex.render('H_{Aa}:', document.getElementById('HAa'));
katex.render('O_{AA}:', document.getElementById('OAA'));
katex.render('O_{Aa}:', document.getElementById('OAa'));
katex.render('p:', document.getElementById('p1'));
katex.render('q:', document.getElementById('q1'));
katex.render('\\alpha:', document.getElementById('apha_t'));
katex.render('\\beta:', document.getElementById('beta_t'));
katex.render('\\mu_{1}:', document.getElementById('mu1_t'));
katex.render('\\mu_{2}:', document.getElementById('mu2_t'));
katex.render('T:', document.getElementById('tiempo_t'));
katex.render('N:', document.getElementById('n_t'));

	$( "#apha" ).slider({
      range: "min",
      min: 0.001,
      max: 0.0124,
			step:0.0001,
      value: 0.002,
      slide: function( event, ui ) {
			$( "#n_apha" ).val(ui.value)
			apha=ui.value
			beta=$( "#beta" ).slider( "value" );
			tiempo=$( "#tiempo" ).slider( "value" );
			console.log(apha+""+beta+""+gamma+""+tiempo)
			id_grafica=$("#cbx_tp_gr").val();
			frk_4(apha,beta,gamma=0,tiempo,'1',id_grafica)

      }
    });

		$( "#beta" ).slider({
				range: "min",
				min: 0.01,
				max: 1,
				step:0.001,
				value: 0.05,
				slide: function( event, ui ) {
				$( "#n_beta").val(ui.value)
				beta=ui.value
				apha=$( "#apha" ).slider( "value" );
				tiempo=$( "#tiempo" ).slider( "value" );
				id_grafica=$("#cbx_tp_gr").val();
				frk_4(apha,beta,gamma=0,tiempo,'1',id_grafica)
				}
			});

			$( "#tiempo" ).slider({
					range: "min",
					min: 10,
					max: 400,
					step:5,
					value: 20,
					slide: function( event, ui ) {
					$( "#n_tiempo").val(ui.value)
					tiempo=ui.value
					beta=$( "#beta" ).slider( "value" );
					apha=$( "#apha" ).slider( "value" );
					id_grafica=$("#cbx_tp_gr").val();
					frk_4(apha,beta,gamma=0,tiempo,'1',id_grafica)
					}
				});

	$( "#n_apha" ).val( $( "#apha" ).slider( "value" ) );
	$( "#n_beta" ).val( $( "#beta" ).slider( "value" ) );
	$( "#n_tiempo" ).val( $( "#tiempo" ).slider( "value" ) );

}


function interfaz_caso2()
{
	removeModel();
	interfaz='<form>\
						<fieldset>\
						<div class="col-md-6">\
						<label id="U"></label>\
						</div>\
						<div class="col-md-6">\
						<input  id="V0" class="form-control" placeholder="V0" value="29360" required autofocus disabled>\
						</div>\
						<div class="col-md-6">\
						<label id="HAA"></label>\
						</div>\
						<div class="col-md-6">\
						<input  id="W0" class="form-control" placeholder="W0" value="9030" required autofocus disabled>\
						</div>\
						<div class="col-md-6">\
						<label id="HAa"></label>\
						</div>\
						<div class="col-md-6">\
						<input  id="X0" class="form-control" placeholder="X0" value="27210" required autofocus disabled>\
						</div>\
						<div class="col-md-6">\
						<label id="OAA"></label>\
						</div>\
						<div class="col-md-6">\
						<input  id="Y0" class="form-control" placeholder="Y0" value="12410" required autofocus disabled>\
						</div>\
						<div class="col-md-6">\
						<label id="OAa"></label>\
						</div>\
						<div class="col-md-6">\
						<input  id="Z0" class="form-control" placeholder="Z0" value="21990" required autofocus disabled>\
						</div>\
						<div class="col-md-6">\
						<label id="mu1_t"></label>\
						</div>\
						<div class="col-md-6">\
						<input  id="mu1" class="form-control" placeholder="mu1" value="0.0082" required autofocus disabled>\
						</div>\
						<div class="col-md-6">\
						<label id="mu2_t"></label>\
						</div>\
						<div class="col-md-6">\
						<input  id="mu2" class="form-control" placeholder="mu2" value="0.0156" required autofocus disabled>\
						</div>\
						</fieldset>\
						<fieldset>\
						<div class="col-md-6">\
						<label id="n_t"></label>\
						</div>\
						<div class="col-md-6">\
						<input name="n" id="n" class="form-control" value="20000" placeholder="Numero de iteraciones" required autofocus disabled>\
						</div>\
						</fieldset>\
						<br>\
						<div class="col-md-12">\
						<div id="apha"></div>\
						<p>\
						<label id="apha_t"></label>\
						<input type="text" id="n_apha" readonly style="border:0; color:#f6931f; font-weight:bold;">\
						</p>\
						<div id="beta"></div>\
						<p>\
						<label id="beta_t"></label>\
						<input type="text" id="n_beta" readonly style="border:0; color:#f6931f; font-weight:bold;">\
						</p>\
						<div id="tiempo"></div>\
						<p>\
						<label id="tiempo_t">tiempo:</label>\
						<input type="text" id="n_tiempo" readonly style="border:0; color:#f6931f; font-weight:bold;">\
						</p>\
						</div>\
						</form>'


	tabla='<table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%" hidden>\
    <thead>\
        <tr>\
            <th>N</th>\
            <th>Uaa</th>\
						<th>HAA</th>\
						<th>HAa</th>\
						<th>OAA</th>\
						<th>OAa</th>\
        </tr>\
    </thead>\
</table>'


cabecera='<select class="form-control" id="cbx_tp_gr">\
						<option  value="1" selected>t vs P</option>\
						<option  value="2">HAA vs OAA</option>\
						<option  value="3">HAa vs OAa</option>\
						<option  value="4">p,q</option>\
				</select>'

grafica='<div  id="dv_grf">\
	</div>'

$('#tp_graf').append(cabecera)
$('#tb_mtd').append(tabla)
$('#bdy_mtd').append(interfaz)
$('#gf_mtd').append(grafica)

katex.render('U_{aa}:', document.getElementById('U'));
katex.render('H_{AA}:', document.getElementById('HAA'));
katex.render('H_{Aa}:', document.getElementById('HAa'));
katex.render('O_{AA}:', document.getElementById('OAA'));
katex.render('O_{Aa}:', document.getElementById('OAa'));
katex.render('\\alpha:', document.getElementById('apha_t'));
katex.render('\\beta:', document.getElementById('beta_t'));
katex.render('\\mu_{1}:', document.getElementById('mu1_t'));
katex.render('\\mu_{2}:', document.getElementById('mu2_t'));
katex.render('T:', document.getElementById('tiempo_t'));
katex.render('N:', document.getElementById('n_t'));

	$( "#apha" ).slider({
      range: "min",
      min: 0.001,
      max: 0.0124,
			step:0.0001,
      value: 0.0079,
      slide: function( event, ui ) {
			$( "#n_apha" ).val(ui.value)
			apha=ui.value
			beta=$( "#beta" ).slider( "value" );
			//gamma=$( "#gamma" ).slider( "value" );
			tiempo=$( "#tiempo" ).slider( "value" );
			console.log(apha+""+beta+""+gamma+""+tiempo)
			id_grafica=$("#cbx_tp_gr").val();
			frk_4(apha,beta,gamma=0,tiempo,'2',id_grafica)

      }
    });

		$( "#beta" ).slider({
				range: "min",
				min: 0.01,
				max: 1,
				step:0.001,
				value: 0.05,
				slide: function( event, ui ) {
				$( "#n_beta").val(ui.value)
				beta=ui.value
				apha=$( "#apha" ).slider( "value" );
				//gamma=$( "#gamma" ).slider( "value" );
				tiempo=$( "#tiempo" ).slider( "value" );
				console.log(apha+""+beta+""+gamma+""+tiempo)
				id_grafica=$("#cbx_tp_gr").val();
				frk_4(apha,beta,gamma=0,tiempo,'2',id_grafica)
				}
			});

				$( "#tiempo" ).slider({
						range: "min",
						min: 10,
						max: 100,
						step:5,
						value: 20,
						slide: function( event, ui ) {
						$( "#n_tiempo").val(ui.value)
						tiempo=ui.value
						beta=$( "#beta" ).slider( "value" );
						apha=$( "#apha" ).slider( "value" );
						id_grafica=$("#cbx_tp_gr").val();
						frk_4(apha,beta,gamma=0,tiempo,'2',id_grafica)
						}
					});

	$( "#n_apha" ).val( $( "#apha" ).slider( "value" ) );
	$( "#n_beta" ).val( $( "#beta" ).slider( "value" ) );
	$( "#n_tiempo" ).val( $( "#tiempo" ).slider( "value" ) );
}

//------------------------------------------------------------------------//
function interfaz_caso4()
{
	removeModel();
	interfaz='<form>\
						<fieldset>\
						<div class="col-md-6">\
						<label id="U"></label>\
						</div>\
						<div class="col-md-6">\
						<input  id="V0" class="form-control" placeholder="V0" value="29360" required autofocus disabled>\
						</div>\
						<div class="col-md-6">\
						<label id="HAA"></label>\
						</div>\
						<div class="col-md-6">\
						<input  id="W0" class="form-control" placeholder="W0" value="9030" required autofocus disabled>\
						</div>\
						<div class="col-md-6">\
						<label id="HAa"></label>\
						</div>\
						<div class="col-md-6">\
						<input  id="X0" class="form-control" placeholder="X0" value="27210" required autofocus disabled>\
						</div>\
						<div class="col-md-6">\
						<label id="OAA"></label>\
						</div>\
						<div class="col-md-6">\
						<input  id="Y0" class="form-control" placeholder="Y0" value="12410" required autofocus disabled>\
						</div>\
						<div class="col-md-6">\
						<label id="OAa"></label>\
						</div>\
						<div class="col-md-6">\
						<input  id="Z0" class="form-control" placeholder="Z0" value="21990" required autofocus disabled>\
						</div>\
						<div class="col-md-6">\
						<label id="mu1_t"></label>\
						</div>\
						<div class="col-md-6">\
						<input  id="mu1" class="form-control" placeholder="mu1" value="0.0082" required autofocus disabled>\
						</div>\
						<div class="col-md-6">\
						<label id="mu2_t"></label>\
						</div>\
						<div class="col-md-6">\
						<input  id="mu2" class="form-control" placeholder="mu2" value="0.0156" required autofocus disabled>\
						</div>\
						</fieldset>\
						<fieldset>\
						<div class="col-md-6">\
						<label id="n_t"></label>\
						</div>\
						<div class="col-md-6">\
						<input name="n" id="n" class="form-control" value="20000" placeholder="Numero de iteraciones" required autofocus disabled>\
						</div>\
						</fieldset>\
						<br>\
						<div class="col-md-12">\
						<div id="apha"></div>\
						<p>\
						<label id="apha_t"></label>\
						<input type="text" id="n_apha" readonly style="border:0; color:#f6931f; font-weight:bold;">\
						</p>\
						<div id="beta"></div>\
						<p>\
						<label id="beta_t"></label>\
						<input type="text" id="n_beta" readonly style="border:0; color:#f6931f; font-weight:bold;">\
						</p>\
						<div id="gamma"></div>\
						<p>\
						<label id="gamma_t"></label>\
						<input type="text" id="n_gamma" readonly style="border:0; color:#f6931f; font-weight:bold;">\
						</p>\
						<div id="tiempo"></div>\
						<p>\
						<label id="tiempo_t">tiempo:</label>\
						<input type="text" id="n_tiempo" readonly style="border:0; color:#f6931f; font-weight:bold;">\
						</p>\
						</div>\
						</form>'



	tabla='<table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%" hidden>\
    <thead>\
        <tr>\
            <th>N</th>\
            <th>Uaa</th>\
						<th>HAA</th>\
						<th>HAa</th>\
						<th>OAA</th>\
						<th>OAa</th>\
        </tr>\
    </thead>\
</table>'
//---------------------------------------------------//
cabecera='<select class="form-control" id="cbx_tp_gr">\
						<option  value="1" selected>t vs P</option>\
						<option  value="2">HAA vs OAA</option>\
						<option  value="3">HAa vs OAa</option>\
						<option  value="4">p,q</option>\
				</select>'
//------------------------------------------------------//
grafica='<div  id="dv_grf">\
	</div>'

$('#tp_graf').append(cabecera)
$('#tb_mtd').append(tabla)
$('#bdy_mtd').append(interfaz)
$('#gf_mtd').append(grafica)
//Para cololar en latex//
katex.render('U_{aa}:', document.getElementById('U'));
katex.render('H_{AA}:', document.getElementById('HAA'));
katex.render('H_{Aa}:', document.getElementById('HAa'));
katex.render('O_{AA}:', document.getElementById('OAA'));
katex.render('O_{Aa}:', document.getElementById('OAa'));
katex.render('\\alpha:', document.getElementById('apha_t'));
katex.render('\\beta:', document.getElementById('beta_t'));
katex.render('\\gamma:', document.getElementById('gamma_t'));
katex.render('\\mu_{1}:', document.getElementById('mu1_t'));
katex.render('\\mu_{2}:', document.getElementById('mu2_t'));
katex.render('T:', document.getElementById('tiempo_t'));
katex.render('N:', document.getElementById('n_t'));

	$( "#apha" ).slider({
      range: "min",
      min: 0.001,
      max: 0.0124,
			step:0.0001,
      value: 0.0079,
      slide: function( event, ui ) {
			$( "#n_apha" ).val(ui.value)
			apha=ui.value
			beta=$( "#beta" ).slider( "value" );
			gamma=$( "#gamma" ).slider( "value" );
			tiempo=$( "#tiempo" ).slider( "value" );
			id_grafica=$("#cbx_tp_gr").val();
			console.log(apha+""+beta+""+gamma+""+tiempo+""+id_grafica)
			frk_4(apha,beta,gamma,tiempo,'4',id_grafica)
      }
    });

		$( "#beta" ).slider({
				range: "min",
				min: 0.01,
				max: 1,
				step:0.001,
				value: 0.249,
				slide: function( event, ui ) {
				$( "#n_beta").val(ui.value)
				beta=ui.value
				apha=$( "#apha" ).slider( "value" );
				gamma=$( "#gamma" ).slider( "value" );
				tiempo=$( "#tiempo" ).slider( "value" );
				id_grafica=$("#cbx_tp_gr").val();
				console.log(apha+""+beta+""+gamma+""+tiempo)
				frk_4(apha,beta,gamma,tiempo,'4',id_grafica)
				}
			});

			$( "#gamma" ).slider({
					range: "min",
					min: 0.01,
					max: 1,
					step:0.001,
					value: 0.803,
					slide: function( event, ui ) {
					$( "#n_gamma").val(ui.value)
					gamma=ui.value
					beta=$( "#beta" ).slider( "value" );
					apha=$( "#apha" ).slider( "value" );
					tiempo=$( "#tiempo" ).slider( "value" );
					id_grafica=$("#cbx_tp_gr").val();
					console.log(apha+""+beta+""+gamma+""+tiempo)
					frk_4(apha,beta,gamma,tiempo,'4',id_grafica)
					}
				});

				$( "#tiempo" ).slider({
						range: "min",
						min: 10,
						max: 300,
						step:5,
						value: 20,
						slide: function( event, ui ) {
						$( "#n_tiempo").val(ui.value)
						tiempo=ui.value
						beta=$( "#beta" ).slider( "value" );
						apha=$( "#apha" ).slider( "value" );
						gamma=$( "#gamma" ).slider( "value" );
						id_grafica=$("#cbx_tp_gr").val();
						console.log(apha+""+beta+""+gamma+""+tiempo)
						frk_4(apha,beta,gamma,tiempo,'4',id_grafica)
						}
					});

	$( "#n_apha" ).val( $( "#apha" ).slider( "value" ) );
	$( "#n_beta" ).val( $( "#beta" ).slider( "value" ) );
	$( "#n_gamma" ).val( $( "#gamma" ).slider( "value" ) );
	$( "#n_tiempo" ).val( $( "#tiempo" ).slider( "value" ) );
}
//------------------------------------------------------------------------//

//------------------------------------------------------------------//



//------------------------------------------------------------------//
function frk_4(alpha,beta,gama,tiempo,id,id_gr)
{
	var apha=alpha.toString();
	var bt=beta.toString();
	var gm=gama.toString();
	var b=tiempo.toString();
	var m1=$("#mu1").val();
	var m2=$("#mu2").val();
	var V0=$("#V0").val();
	var W0=$("#W0").val();
	var X0=$("#X0").val();
	var Y0=$("#Y0").val();
	var Z0=$("#Z0").val();
	var n=$("#n").val();
	var p=0.46;
	var q=0.54;
	var id=id;
	var id_gr=id_gr;
	var parametros={
		apha:apha,
		bt:bt,
		gm:gm,
		m1:m1,
		m2:m2,
		b:b,
		V0:V0,
		W0:W0,
		X0:X0,
		Y0:Y0,
		Z0:Z0,
		n:n,
		id:id,
		id_gr:id_gr,
		p:p,
		q:q
	}
	console.log(parametros)
	//------------------------------------------//
	$.ajax({
		url: '/metodos',
		data: parametros,
		type: 'POST',
		success: function(datos){
			$('#example').show()
			var obj = jQuery.parseJSON(datos);
			 $('#example').DataTable({
				data: obj,
				destroy:true,
				searching: false,
				paging:   false,
			ordering: false,
			info:     false,
			dom: 'Bfrtip',
		 buttons: [
				 'copy', 'csv', 'excel', 'pdf', 'print'
		 ]
				});
		},
		error: function(error){
			console.log(error);
		}
	});

	$.ajax({
		url: '/grafica',
		data: parametros,
		type: 'POST',
		success: function(datos){
			var obj = jQuery.parseJSON(datos);
			$('#dv_grf').html(obj)
		},
		error: function(error){
			console.log(error);
		}
	});
}
//----------------------------------------------------------//

function removeModel() {
		$('.dt-buttons').remove();
		$('#cbx_tp_gr').remove();
    $('form').remove();
		$('#dv_grf').remove();
		$('#dv_btn').remove();
		$('#example').remove();
}


/*function escribir_funcion()
{
	$( "#funcion").keydown(function() {
	  console.log($("#funcion").val());
	});
}*/
