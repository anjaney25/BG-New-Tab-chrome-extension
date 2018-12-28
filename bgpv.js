var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var txt = this.responseText;
    tx = txt.split("\n");
    li = 640;
    num = tx[li];
    verse = tx[li+16];
    if(ver=="bg/2/42-43/" || ver=="bg/10/12-13/" || ver=="bg/12/6-7/" || ver=="bg/12/13-14/"){
      verse = tx[658] + "<br/>" + tx[660];
      console.log(verse);
      li = 644;
    }
    if(ver=="bg/6/20-23/"){
      verse = tx[662] + "<br/>" + tx[664] + "<br/>" + tx[666] + "<br/>" + tx[668];
      li = 652;
    }
    if(ver=="bg/16/1-3/"){
      verse = tx[660] + "<br/>" + tx[662] + "<br/>" + tx[664];
      li = 648;
    }
    if(ver=="bg/13/8-12/"){
      verse = tx[664] + "<br/>" + tx[666] + "<br/>" + tx[668] + "<br/>" + tx[670] + "<br/>" +tx[672];
      li = 656;
    }
    word_meaning = tx[li+25];
    translation = tx[li+34];

    document.getElementById("default").style.display = "none";
    document.getElementById("first").innerHTML = num;
    document.getElementById("second").innerHTML = verse;
    document.getElementById("third").innerHTML = word_meaning;
    document.getElementById("fourth").innerHTML = translation;

  }
};

var randBetween = function(start, end) {
  return Math.floor(Math.random() * end) + start;
};
var verses = JSON.parse(data);
// console.log(verses.length);
var ind = randBetween(0, verses.length-1);
var ver = verses[ind];
xhttp.open("GET", "https://vedabase.io/en/library/" + ver, true);
xhttp.send();
