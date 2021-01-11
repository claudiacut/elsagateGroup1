
// const rellax = new Rellax('.rellax');
//
// // grabs the media query
// const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
//
// // if the user prefers reduced motion, disable parallax
// if (motionMediaQuery.matches) rellax.destroy();

let cat_1 = document.getElementById("cat1");
let word = document.getElementById("collage");
word.style.display  = 'none';


// document.getElementById("collage").style.display = "none";

cat_1.addEventListener("mouseover", function(){
  // alert ("mouse over test!")
  // , (false);
  word.style.display  = 'block';
});

cat_1.addEventListener("mouseout", function(){
  // alert ("mouse over test!")
  // , (false);
  word.style.display  = 'none';
});
// document.getElementById('cat_1').addEventListener("mouseover", function(){
//
//   alert("WOrks");
//
//   collage.style.display  = 'block';
//
// });




Swal.fire({
  title: 'Warning!',
  text: "This content may not be suitable for you, you have 3 seconds to change page",
  // showCancelButton: true,
  // confirmButtonColor: '#3085d6',
  // cancelButtonColor: '#d33',
	showConfirmButton: false,
	timer: 3000

})
