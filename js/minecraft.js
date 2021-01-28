
$(function(){

	$("#vizmine").load('minecraft.svg',function(response){

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




		//bottone violence
		d3.select("#cn1").on("click", function() {
			violence.style('opacity', 1);
			gore.style('opacity', 0);
			pregnancy.style('opacity', 0);
			toilet.style('opacity', 0);
			sexual.style('opacity', 0);
			distortion.style('opacity', 0);
			originale.style('opacity', 0);

			//cambio colore bottone
			d3.select("#btn1").style("color", "#f2f2f2");
			d3.select("#btn1").style("background-color", "#191819");

		});


		//bottone gore
		d3.select("#cn2").on("click", function() {
			gore.style('opacity', 1);
			pregnancy.style('opacity', 0);
			toilet.style('opacity', 0);
			sexual.style('opacity', 0);
			distortion.style('opacity', 0);
			originale.style('opacity', 0);
			gore.style('opacity', 0);

			//cambio colore bottone
			d3.select("#btn2").style("color", "#f2f2f2");
			d3.select("#btn2").style("background-color", "#191819");

		});



		//bottone sexual
		d3.select("#cn3").on("click", function() {
			sexual.style('opacity', 1);
			pregnancy.style('opacity', 0);
			toilet.style('opacity', 0);
			violence.style('opacity', 0);
			distortion.style('opacity', 0);
			originale.style('opacity', 0);
			gore.style('opacity', 0);

			//cambio colore bottone
			d3.select("#btn3").style("color", "#f2f2f2");
			d3.select("#btn3").style("background-color", "#191819");

		});


		//bottone toilet
		d3.select("#cn4").on("click", function() {
			toilet.style('opacity', 1);
			pregnancy.style('opacity', 0);
			violence.style('opacity', 0);
			sexual.style('opacity', 0);
			distortion.style('opacity', 0);
			originale.style('opacity', 0);
			gore.style('opacity', 0);

			//cambio colore bottone
			d3.select("#btn4").style("color", "#f2f2f2");
			d3.select("#btn4").style("background-color", "#191819");

		});


		//bottone distortion
		// d3.select("#cn5").on("click", function() {
		// 	gore.style('opacity', 0);
		// 	pregnancy.style('opacity', 0);
		// 	toilet.style('opacity', 0);
		// 	sexual.style('opacity', 0);
		// 	distortion.style('opacity', 1);
		// 	originale.style('opacity', 0);
		// 	violence.style('opacity', 0);
		//
		// 	//cambio colore bottone
		// 	d3.select("#btn5").style("color", "#f2f2f2");
		// 	d3.select("#btn5").style("background-color", "#191819");
		//
		// });



		//bottone pregnancy
		d3.select("#cn6").on("click", function() {
			pregnancy.style('opacity', 1);
			violence.style('opacity', 0);
			toilet.style('opacity', 0);
			sexual.style('opacity', 0);
			distortion.style('opacity', 0);
			originale.style('opacity', 0);
			gore.style('opacity', 0);

			//cambio colore bottone
			d3.select("#btn6").style("color", "#f2f2f2");
			d3.select("#btn6").style("background-color", "#191819");

		});




		//si resetta tutto con il click fuori dal bottone
		$(document).click((event) => {
			if (!$(event.target).closest('.btn').length) {
				// the click occured outside '#element'
				console.log("hello");
				gore.style('opacity', 1);
				sexual.style('opacity', 1);
				toilet.style('opacity', 1);
				pregnancy.style('opacity', 1);
				distortion.style('opacity', 1);
				originale.style('opacity', 1);

				d3.select("#btn1").style("color", "#191819");
				d3.select("#btn1").style("background-color", "#f2f2f2");

				d3.select("#btn2").style("color", "#191819");
				d3.select("#btn2").style("background-color", "#f2f2f2");

				d3.select("#btn3").style("color", "#191819");
				d3.select("#btn3").style("background-color", "#f2f2f2");

				d3.select("#btn4").style("color", "#191819");
				d3.select("#btn4").style("background-color", "#f2f2f2");

				d3.select("#btn5").style("color", "#191819");
				d3.select("#btn5").style("background-color", "#f2f2f2");

				d3.select("#btn6").style("color", "#191819");
				d3.select("#btn6").style("background-color", "#f2f2f2");

			}
			});

		// fine funzione

	});

});


timeout_id = setTimeout(function() {
	document.getElementById('dissolvenza').style.display = "none"
}, 5000);
