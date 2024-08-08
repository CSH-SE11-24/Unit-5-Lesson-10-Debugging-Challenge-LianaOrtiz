console.log("challenge1.js running");

let button = document.querySelector("#clickButton");
console.log(button);

let img1 = document.querySelector("#debug");
console.log(img1);

button.addEventListener("click", function(event){
  console.log("image button clicked");
  img1.src = "debugging.gif"
})