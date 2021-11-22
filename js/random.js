//creating an array and passing the random question file
const random_btn = document.querySelector(".random_btn button");

random_btn.onclick(random_test);



function random_test() 
{
     var theFiles = [{
        src: "alkarim/test1.html",
        
    }, {
        src: "alkarim/test2.html",
        
    }, {
        src: "alkarim/test3.html",
        
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theFiles.length; i < j; i++) {
        preBuffer[i] = new File();
        preBuffer[i].src = theFiles[i].src;
    }
   
// create random file number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first file,   preBuffer.length - 1) is  last file
  
var newFile = getRandomInt(0, preBuffer.length - 1);
 
// display the file 
window.location.href = ""; 
// document.body.appendChild(newFile);
}

// let questionFile = [
// {

// }

// ];


// var randomTest = Math.floor(Math.random() * 5) +1; //generating random number

// var randomTestJs = "test" + randomTest + ".js"; // targeting random question file source

// var questionSource = "js/" + randomTestJs; //selecting question file source

// var test = document.querySelectorAll("script")[0]; //selecting tag attribute

// test.setAttribute("src", questionSource); //overwriting question file



// var randomTest = Math.floor(Math.random() * 5) + 1;

// var randomTestJs = "js/test" + randomTest + ".js";

// document.querySelector(".random")[2].setAttribute("src" randomTestJs);
