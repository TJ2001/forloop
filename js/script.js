$(document).ready(function(){
  $("form#counting").submit(function(event) {
    event.preventDefault();
    var countTo = parseInt($("#countA").val());
    var countBy = parseInt($("#countB").val());
    var numbers = [];
    if (Math.abs(countBy) > Math.abs(countTo) || (countTo > 0 && countBy < 0) || (countTo < 0 && countBy > 0)){
      output = "You cannot count to "+countTo.toString()+" by "+countBy.toString();
    } else if (isNaN(countTo) || isNaN(countBy)) {
      output = "Please enter only numbers.";
    } else {
      for (var count = 0; Math.abs(count) <= Math.abs(countTo); count += countBy){
        numbers.push(count);
      }
      var output = numbers.join(", ");
    }
    $("#count").text(output);
  });
  $("form#word-puzzle").submit(function(event) {
    event.preventDefault();
    var sentence = $("#puzzle").val();
    var vowels = ["a","e","i","o","u","y"];
    vowels.forEach(function(vowel) {
      sentence = sentence.replace(vowel, "-");
      sentence = sentence.replace(vowel.toUpperCase(), "-");
    });
    $("#dashed").text(sentence);
  });
  $("form#factorial").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#number").val());
    var out = 1;

    if (number < 0 || isNaN(number)){
      $("#result").text("this will not work")
    } else {
      for(var beg = 1; beg <= number; beg += 1){
        out = out * beg;
      }
      $("#result").text(out.toString());
    }
  });

  $("form#palindrome").submit(function(event) {
    event.preventDefault();
    var pword = $("#word").val().replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toUpperCase();
    var wordarray = pword.split("");
    var reversedword = wordarray.reverse().join("");
    if(reversedword === pword) {
      $("#isapalindrome").text("That is a palindrome.")
    } else {
      $("#isapalindrome").text("That is not a palindrome.")
    }
  });

  $("form#prime").submit(function(event) {
    event.preventDefault();
    var pnumber = parseInt($("#inputnumber").val());
    var parray = [];

    for(var index = 2; index <= pnumber; index += 1){
      parray.push(index);
    }

    for(var prime = 2; prime < parray.length; prime++) {
      for(var i=0; i < parray.length; i++){
        var p = parray[i];
        if(p%prime === 0 && p!=prime) {
          parray.splice(i,1);
        }
      }
    }

    $("#primenumbers").text(parray.join(", "));

  });






});
