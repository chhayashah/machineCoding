let btn = document.getElementById("btn");
let model = document.getElementById("model");
let close = document.getElementById("close");

btn.addEventListener("click", function (e) {
    model.style.display = "block";
});

close.addEventListener("click", function (e) {
    model.style.display = "none";
});