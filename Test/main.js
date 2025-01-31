let btn = document.querySelector('#myButton');

btn.addEventListener("click", () => alert("I am so sexy"));

btn.addEventListener("click", function(e) {console.log(e.target);});

btn.addEventListener("click", function(e) {e.target.style.background = "blue";});
