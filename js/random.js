var randomTest = Math.floor(Math.random() * 5) +1; //generating random number

var randomTestJs = "test" + randomTest + ".js"; // targeting random question file source

var questionSource = "js/" + randomTestJs; //selecting question file source

var test = document.querySelectorAll("script")[0]; //selecting tag attribute

test.setAttribute("src", questionSource); //overwriting question file



// var randomTest = Math.floor(Math.random() * 5) + 1;

// var randomTestJs = "js/test" + randomTest + ".js";

// document.querySelector(".random")[2].setAttribute("src" randomTestJs);
