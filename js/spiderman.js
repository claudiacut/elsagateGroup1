$(function(){

	$("#vizspider").load('spiderman.svg',function(response){

		$(this).addClass("svgLoaded");

    // animazioni

		const sex = d3.selectAll('#sex');
    const gore = d3.selectAll('#gore');
		const distortion = d3.selectAll('#distortion');

		sex.on('click', function(){
   gore.style('opacity',0.3);
   distortion.style('opacity',0.3);
  	// «this» refers to hovering element
      d3.select(this).transition().duration(2).ease(d3.easeLinear).style('opacity',1);
    });

		gore.on('click', function(){
   sex.style('opacity',0.3);
   distortion.style('opacity',0.3);
  	// «this» refers to hovering element
      d3.select(this).transition().duration(2).ease(d3.easeLinear).style('opacity',1);
    });

		distortion.on('click', function(){
   gore.style('opacity',0.3);
   sex.style('opacity',0.3);
  	// «this» refers to hovering element
      d3.select(this).transition().duration(2).ease(d3.easeLinear).style('opacity',1);
    });

    d3.select('#sfondo').on('click', function(){
      sex.transition().duration(1).ease(d3.easeLinear).style('opacity',1);
			gore.transition().duration(1).ease(d3.easeLinear).style('opacity',1);
			distortion.transition().duration(1).ease(d3.easeLinear).style('opacity',1);
    });

			});

});

timeout_id = setTimeout(function(){document.getElementById('dissolvenza').style.display="none"}, 5000);
