//
// var c1 = document.getElementById("c1");
// var s1 = document.getElementById("s1");
// var s1_1 = document.getElementById("s1_1");
//
//
// var c2 = document.getElementById("c2");
// var s2 = document.getElementById("s2");
// var s2_1 = document.getElementById("s2_1");
//
//
// var c3 = document.getElementById("c3");
// var s3 = document.getElementById("s3");
// var s3_1 = document.getElementById("s3_1");
//
//
// var c4 = document.getElementById("c4");
// var s4 = document.getElementById("s4");
// var s4_1 = document.getElementById("s4_1");

// var s1 = document.getElementById("s1");
// c1.style.transform = "translate(60%, -30%)";

// document.getElementById("s1_1").addEventListener("click", myFunction);
//
// function myFunction() {
// c1.style.transform = "rotate(10deg)";
//
// }


s1_1.addEventListener("click", function(){
     c1.style.transform = "translate(-0%, 0%)"
});

s1.addEventListener("click", function(){
     c1.style.transform = "translate(60%, -30%)"
});

// c1.addEventListener("click", function(){
//      c1.style.transform = "translate(60%, -30%)"
//
// });
//
// s1.addEventListener("click", function(){
//      c1.style.transform = "rotate(10deg)"
// });

// c1.addEventListener("click", function(ev){
//         c1.style.transform = "translate(60%, -30%)";
//     }if(ev.currentTarget.id !== "c1"){
//         c1.style.transform = "translate(0%, 0%)";
//     }
//   });




// c1.addEventListener("click", function(ev){
//
//     if(ev.currentTarget.id == "c1"){
//         c1.style.transform = "translate(60%, -30%)";
//     }else if(ev.currentTarget.id == "s1_1"){
//         c1.style.transform = "translate(0%, 0%)";
//     }
//
// });


s2.addEventListener("click", function(){
     c2.style.transform = "translate(40%, -20%)"
     c2.style.zIndex = "100";
});

s2_1.addEventListener("click", function(){
     c2.style.transform = "translate(0%, 0%)"
     c2.style.zIndex = "20";
});



s3.addEventListener("click", function(){
     c3.style.transform = "translate(20%, -10%)"
     c3.style.zIndex = "100";
});

s3_1.addEventListener("click", function(){
     c3.style.transform = "translate(0%, 0%)"
     c3.style.zIndex = "10";
});



s4.addEventListener("click", function(){
     c4.style.transform = "translate(0%, 0%)"
     c4.style.zIndex = "100";
      console.log("miao");
});

s4_1.addEventListener("click", function(){
     c4.style.transform = "translate(0%, 0%)"
     c4.style.zIndex = "1";
      console.log("ooo");
});
