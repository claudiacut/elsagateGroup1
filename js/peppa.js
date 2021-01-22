// Promise.all([d3.html("./peppa.html"), d3.html(".peppa.svg")]).then(function([html, svgDocument]){
// const questionContent = d3.select(html).selectAll('body > *');
// questionContent.each(function(d){
// // d3.select("#question-container").node().appendChild(this);
// });
// let svgNode = svgDocument.querySelector("svg");
// // console.log(svgNode);
// let container = document.querySelector("#viz");
// // console.log(container);
// container.appendChild(svgNode);
// console.log(container);

// var c = document.getElementById("myCanvas");
// console.log(myCanvas);
// var s =document.getElementById("#viz");
// console.log(viz);



$(function(){

	$("#viz").load('peppa.svg',function(response){

		$(this).addClass("svgLoaded");

    // animazioni



			// $( "#sex" ).on( "click", function() {
			//
			// 	$( "#gore" ).css('opacity') = '0.0';
		  //   $( "#distortion" ).css('opacity') = '0.0';
			// 	$(this).css('opacity') = '1';
			//
			// };

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
