// Stampare tutti i numeri da 1 a 100 con le seguenti regole:
//    al posto dei multipli di 3 stampare "Fizz"
//    al posto dei multipli di 5 stampare "Buzz"
//    al posto dei multipli di 3 e 5 stampare "FizzBuzz"

var number = "";

for (var i = 1; i <= 100 ; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    number += "<li>" +"FizzBuzz" + "</li>";
    console.log(number);
  } else if (i % 5 == 0) {
    number += "<li>" + "Buzz" + "</li>";
    console.log(number);
  } else if (i % 3 == 0){
    number += "<li>" + "Fizz" + "</li>";
    console.log(number);
  } else{
    number += "<li>" + i + "</li>";
    console.log(number);
  }

}
number = "<ol>" + number + "</ol>";
document.getElementById("FizzBuzz").innerHTML = number;

// ("<ol>" + number + "</ol>");
