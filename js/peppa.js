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

		// if(!response){
			// Error loading SVG!
			// Make absolutely sure you are running this on a web server or localhost!
		// }

	});
});

timeout_id = setTimeout(function(){document.getElementById('dissolvenza').style.display="none"}, 5000);
