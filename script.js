console.log("script.js running");

let butt = document.querySelector("#lowerCaseButton");
console.log(butt);

let h1 = document.getElementById("hello");
console.log(h1);

butt.addEventListener("click", function(event){
  console.log("lowercase clicked");
  h1.textContent = "hello there"
})

let butt1 = document.querySelector("#upperCaseButton");
console.log(butt1);

butt1.addEventListener("click", function(event){
  console.log("uppercase clicked");
  h1.textContent = "HELLO THERE";
});