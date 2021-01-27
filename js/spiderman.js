

// var bt1 = document.getElementId("cn1");


$(function(){

	$("#vizspider").load('spiderman.svg',function(response){

		$(this).addClass("svgLoaded");

// 		var cn1 = document.getElementbyId("cn1");
//
// 		$( "cn1" ).click(function() {
//   document.getElementById("violence").beginElement();
// 	console.log("ciao");
// });

    // animazioni
//
// var sexual = document.getElementId("sex");
//
//  $( "bt1" ).on( "click", function() {
//   $( "sexual" ).style('opacity',0.3);
// });

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
		//
    d3.select("#cn1").on("click", function(){
			gore.style('opacity',0.3);
	    pregnancy.style('opacity',0.3);
			toilet.style('opacity',0.3);
			sexual.style('opacity',0.3);
			distortion.style('opacity',0.3);
			originale.style('opacity',0.3);
			violence.transition().duration(2).ease(d3.easeLinear).style('opacity',1);
		});

		// sfondo.on("click", function(){
		// 	    .style("opacity",1);
		// });

		// sexual.on('click', function(){
   // gore.style('opacity',0.3);
   // distortion.style('opacity',0.3);
  	// // «this» refers to hovering element
   //    d3.select(this).transition().duration(2).ease(d3.easeLinear).style('opacity',1);
   //  });
	 //
		// gore.on('click', function(){
   // sexual.style('opacity',0.3);
   // distortion.style('opacity',0.3);
  	// // «this» refers to hovering element
   //    d3.select(this).transition().duration(2).ease(d3.easeLinear).style('opacity',1);
   //  });
	 //
		// distortion.on('click', function(){
   // gore.style('opacity',0.3);
   // sexual.style('opacity',0.3);
  	// // «this» refers to hovering element
   //    d3.select(this).transition().duration(2).ease(d3.easeLinear).style('opacity',1);
   //  });
	 //
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
