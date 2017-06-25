"use strict";

var file = document.getElementById("file");
console.log(file);

file.addEventListener("change", function() {
  console.log(file.files[0]);
});
