
function randomNumbers() {
  var nouns = new Array();
   nouns[0] = "Lion";
   nouns[1] = "California";
   nouns[2] = "Book";
   nouns[3] = "Pencil";
   nouns[4] = "Iphone";
  var num1 = Math.floor(Math.random()*5);

  var adjectives = new Array();
  adjectives[0]  = "Good";
  adjectives[1]  = "New";
  adjectives[2]  = "First";
  adjectives[3]  = "Last";
  adjectives[4]  = "Bad";

var num2 = Math.floor(Math.random()*5);

document.getElementById("output").innerHTML= ("What a "+ adjectives[num2]+ " "+ nouns[num1])
}
