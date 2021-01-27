
$(function(){

	$("#vizspider").load('spiderman.svg',function(response){

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
