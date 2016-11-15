var myPrompt = prompt("what is your age?");

var theDate = new Date();
var year = theDate.getFullYear();

var total = year - myPrompt;

document.getElementById("Output").innerHTML = total;





/*console.log(year"-"+age);

prompt("what is your age")*/
