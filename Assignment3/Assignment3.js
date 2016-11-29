/*var numArray = ['zero','one','two','three'];

var num = "two";

var position = numArray.indexOf(num);

console.log(numArray[25]);
*/
var number1;
var number2;

var output;

function change() {

if(number1 == "twenty-five"){
number1 = 25;
}
else if(number1 == "twenty-four"){
  number1 = 24;
}
else if(number1 == "twenty-three"){
  number1 = 23;
}
else if(number1 == "twenty-two"){
  number1 = 22;
}
else if(number1 == "twenty-one"){
  number1 = 21;
}
else if(number1 == "twenty"){
  number1 = 20;
}
else if(number1 == "nineteen"){
  number1 = 19;
}
else if(number1 == "eighteen"){
  number1 = 18;
}
else if(number1 == "seventeen"){
  number1 = 17;
}
else if(number1 == "sixteen"){
  number1 = 16;
}
else if(number1 == "fifteen"){
  number1 = 15;
}
else if(number1 == "fourteen"){
  number1 = 14;
}
else if(number1 == "thirteen"){
  number1 = 13;
}
else if(number1 == "twelve"){
  number1 = 12;
}
else if(number1 == "eleven"){
  number1 = 11;
}
else if(number1 == "ten"){
  number1 = 10;
}
else if(number1 == "nine"){
  number1 = 9;
}
else if(number1 == "eight"){
  number1 = 8;
}
else if(number1 == "seven"){
  number1 = 7;
}
else if(number1 == "six"){
  number1 = 6;
}
else if(number1 == "five"){
  number1 = 5;
}
else if(number1 == "four"){
  number1 = 4;
}
else if(number1 == "three"){
  number1 = 3;
}
else if(number1 == "two"){
  number1 = 2;
}
else if(number1 == "one"){
  number1 = 1;
}

if(number2 == "twenty-five"){
number1 = 25;
}
else if(number2 == "twenty-four"){
  number2 = 24;
}
else if(number2 == "twenty-three"){
  number2 = 23;
}
else if(number2 == "twenty-two"){
  number1 = 22;
}
else if(number2 == "twenty-one"){
  number2 = 21;
}
else if(number2 == "twenty"){
  number2 = 20;
}
else if(number2 == "nineteen"){
  number2 = 19;
}
else if(number2 == "eighteen"){
  number2 = 18;
}
else if(number2 == "seventeen"){
  number2 = 17;
}
else if(number2 == "sixteen"){
  number2 = 16;
}
else if(number2 == "fifteen"){
  number2 = 15;
}
else if(number2 == "fourteen"){
  number2 = 14;
}
else if(number2 == "thirteen"){
  number2 = 13;
}
else if(number2 == "twelve"){
  number2 = 12;
}
else if(number2 == "eleven"){
  number2 = 11;
}
else if(number2 == "ten"){
  number2 = 10;
}
else if(number2 == "nine"){
  number2 = 9;
}
else if(number2 == "eight"){
  number2 = 8;
}
else if(number2 == "seven"){
  number2 = 7;
}
else if(number2 == "six"){
  number2 = 6;
}
else if(number2 == "five"){
  number2 = 5;
}
else if(number2 == "four"){
  number2 = 4;
}
else if(number2 == "three"){
  number2 = 3;
}
else if(number2 == "two"){
  number2 = 2;
}
else if(number2 == "one"){
  number2 = 1;
}
}

function exchange(){

  if(output == 25){
  output = "twenty-five"
  }
  else if(output == 24){
    output = "twenty-four"
  }
  else if(output == 23){
    output = "twenty-three"
  }
  else if(output == 22){
    output = "twenty-two"
  }
  else if(output == 21){
    output = "twenty-one"
  }
  else if(output == 20){
    output = "twenty"
  }
  else if(output == 19){
    output = "nineteen"
  }
  else if(output == 18){
    output = "eighteen"
  }
  else if(output == 17){
    output = "seventeen"
  }
  else if(output == 16){
    output = "sixteen"
  }
  else if(output == 15){
    output =  "fifteen"
  }
  else if(output == 14){
    output = "fourteen"
  }
  else if(output == 13){
    output = "thirteen"
  }
  else if(output == 12){
    output = "twelve"
  }
  else if(output == 11){
    output = "eleven"
  }
  else if(output == 10){
  output = "ten"
  }
  else if(output == 9){
    output = "nine"
  }
  else if(output == 8){
    output = "eight"
  }
  else if(output == 7){
    output = "seven"
  }
  else if(output == 6){
    output = "six"
  }
  else if(output == 5){
    output = "five"
  }
  else if(output == 4){
    output = "four"
  }
  else if(output == 3){
    output = "three"
  }
  else if(output == 2){
    output = "two"
  }
  else if(output == 1){
    output = "one"
  }


}

function add(){

  number1 =  document.getElementById("number1").value;
  number2 =  document.getElementById("number2").value;
  number1words = number1;
  number2words = number2;
  change();

  output = number1 + number2;
exchange();
  alert(document.getElementById("Output").innerHTML = number1words + " plus " + number2words + " equals " + output);
}


function minus(){

  number1 = document.getElementById("number1").value;
  number2 = document.getElementById("number2").value;
  number1words = number1;
  number2words = number2;
  change();

  output = number1 - number2;
exchange();
    alert(document.getElementById("Output").innerHTML = number1words + " minus " + number2words + " equals " + output);
}

function multiply(){

  number1 = document.getElementById("number1").value;
  number2 = document.getElementById("number2").value;
  number1words = number1;
  number2words = number2;
  change();

  output = number1 * number2;
exchange();
  alert(document.getElementById("Output").innerHTML = number1words + " times " + number2words + " equals " + output);
}


function divide(){

  number1 = document.getElementById("number1").value;
  number2 = document.getElementById("number2").value;
  number1words = number1;
  number2words = number2;
  change();

  output = number1 / number2;
exchange();
    alert(document.getElementById("Output").innerHTML = number1words + " divided by " + number2words + " equals " + output);
}

function border(){
  document.getElementById("box").style.border = " white thick dashed";
  document.getElementById("box").style.textAlign ="center";
  document.getElementById("box").backgroundColor = "grey";
}
