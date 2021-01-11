//
// var rellax = new Rellax(".rellax");
//
// // grabs the media query
// const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
//
//
// // if the user prefers reduced motion, disable parallax
// if (motionMediaQuery.matches) rellax.destroy();

let cat_1 = document.getElementById("cat1");
let word = document.getElementById("collage");
word.style.display  = 'none';

let cat_2 = document.getElementById("cat2");
let word2 = document.getElementById("collage2");
word2.style.display  = 'none';

let cat_3 = document.getElementById("cat3");
let word3 = document.getElementById("collage3");
word3.style.display  = 'none';

let cat_4 = document.getElementById("cat4");
let word4 = document.getElementById("collage4");
word4.style.display  = 'none';


cat_1.addEventListener("mouseover", function(){
  // alert ("mouse over test!")
  // , (false);
  word.style.display  = 'block';
});

cat_2.addEventListener("mouseover", function(){
  // alert ("mouse over test!")
  // , (false);
  word2.style.display  = 'block';
});

cat_3.addEventListener("mouseover", function(){
  // alert ("mouse over test!")
  // , (false);
  word3.style.display  = 'block';
});

cat_4.addEventListener("mouseover", function(){
  // alert ("mouse over test!")
  // , (false);
  word4.style.display  = 'block';
});



cat_1.addEventListener("mouseout", function(){

  word.style.display  = 'none';
});

cat_2.addEventListener("mouseout", function(){

  word2.style.display  = 'none';
});

cat_3.addEventListener("mouseout", function(){

  word3.style.display  = 'none';
});

cat_4.addEventListener("mouseout", function(){

  word4.style.display  = 'none';
});









Swal.fire({
  title: 'Warning!',
  text: "This content may not be suitable for you, you have 3 seconds to change page",
  // showCancelButton: true,
  // confirmButtonColor: '#3085d6',
  // cancelButtonColor: '#d33',
	showConfirmButton: false,
	timer: 3000

})
