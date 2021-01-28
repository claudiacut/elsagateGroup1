// $(function(){
//
// 	$("#vizelsa").load('elsa.svg',function(response){
//
// 		$(this).addClass("svgLoaded");
//
//
//     // animazioni
//
// 		const sex = d3.selectAll('#sex');
//     const gore = d3.selectAll('#gore');
// 		const distortion = d3.selectAll('#distortion');
//
// 		sex.on('click', function(){
//    gore.style('opacity',0.3);
//    distortion.style('opacity',0.3);
//   	// «this» refers to hovering element
//       d3.select(this).transition().duration(2).ease(d3.easeLinear).style('opacity',1);
//     });
//
// 		gore.on('click', function(){
//    sex.style('opacity',0.3);
//    distortion.style('opacity',0.3);
//   	// «this» refers to hovering element
//       d3.select(this).transition().duration(2).ease(d3.easeLinear).style('opacity',1);
//     });
//
// 		distortion.on('click', function(){
//    gore.style('opacity',0.3);
//    sex.style('opacity',0.3);
//   	// «this» refers to hovering element
//       d3.select(this).transition().duration(2).ease(d3.easeLinear).style('opacity',1);
//     });
//
//     d3.select('#sfondo').on('click', function(){
//       sex.transition().duration(1).ease(d3.easeLinear).style('opacity',1);
// 			gore.transition().duration(1).ease(d3.easeLinear).style('opacity',1);
// 			distortion.transition().duration(1).ease(d3.easeLinear).style('opacity',1);
//     });
//
// 			});
//
// });
//
// timeout_id = setTimeout(function(){document.getElementById('dissolvenza').style.display="none"}, 5000);













$(function(){

	$("#vizelsa").load('elsa.svg',function(response){

		$(this).addClass("svgLoaded");

		//
		const sexual = d3.selectAll('#sex');
    const gore = d3.selectAll('#gore');
		const violence = d3.selectAll('#violence');
		const toilet = d3.selectAll('#toilet');
		const pregnancy = d3.selectAll('#pregnancy');
		const distortion = d3.selectAll('#distortion');
		const originale = d3.selectAll('#originale');
		const fisso = d3.selectAll('#fisso');

		//
		//bottone violence
    d3.select("#cn1").on("click", function(){
			gore.style('opacity',0.3);
	    pregnancy.style('opacity',0.3);
			toilet.style('opacity',0.3);
			sexual.style('opacity',0.3);
			distortion.style('opacity',0.3);
			originale.style('opacity',0.3);
			violence.transition().duration(2).ease(d3.easeLinear).style('opacity',1);
		});

   //bottone gore
		d3.select("#cn2").on("click", function(){
			gore.transition().duration(2).ease(d3.easeLinear).style('opacity',1);
			pregnancy.style('opacity',0.3);
			toilet.style('opacity',0.3);
			sexual.style('opacity',0.3);
			distortion.style('opacity',0.3);
			originale.style('opacity',0.3);
			gore.style('opacity',0.3);
		});

		//bottone distortion
    d3.select("#cn5").on("click", function(){
			gore.style('opacity',0.3);
	    pregnancy.style('opacity',0.3);
			toilet.style('opacity',0.3);
			sexual.style('opacity',0.3);
			distortion.transition().duration(2).ease(d3.easeLinear).style('opacity',1);
			originale.style('opacity',0.3);
			violence.style('opacity',0.3);
		});


    d3.select('#sfondo').on('click', function(){
			gore.style('opacity',1);
			pregnancy.style('opacity',1);
			toilet.style('opacity',1);
			sexual.style('opacity',1);
			distortion.style('opacity',1);
			originale.style('opacity',1);
    });

		// fine funzione

			});

});


timeout_id = setTimeout(function(){document.getElementById('dissolvenza').style.display="none"}, 5000);
