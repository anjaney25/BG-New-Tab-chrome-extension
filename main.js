var map1 = new Map([["0" , ""], ["1", "(The sages to Suta Gosvami)"], ["2", "(Suta Gosvami instructs the sages of Naimisaranya)"], ["3", "(Narada Muni instructs Vyasadeva)"], ["4", "(Prayers by Queen Kunti)"], ["5", "(King Yudhisthira greets Vidura)"], ["6", "(Narada Muni instructs King Yudhisthira)"], ["7","(Sukadeva Gosvami instructs Maharaja Pariksit)"], ["8", "(The sages of Naimisaranya to Süta Gosvami)"], ["9", "(King Pariksit states his determination to the sages gathered at the Ganges bank)"], ["10", "(Saunaka Rsi to Suta Gosvami)"], ["11", "(Maharaja Pariksit to Sukadeva Gosvami)"], ["12", "(Lord Krsna instructs Brahma)"], ["13", "(Uddhava to Vidura)"], ["14", "(Vidura to Maitreya Muni)"], ["15", "(Demigods' prayers to Lord Visnu)"], ["16", "(Brahma's prayers for creative energy)"], ["17", "(Lord Brahma to the demigods)"], ["18", "(Lord Brahma describing the pastime of the four Kumaras)"], ["19", "(Devahuti to Kardama Muni)"], ["20", "(Lord Kapila instructs Devahuti)"], ["21", "(Devahuti to Lord Kapila)"], ["22", "(Lord Siva to Sati)"], ["23", "(Sanat Kumara instructs King Prthu)"], ["24", "(Lord Visnu instructs the Pracetas)"], ["25", "(The Pracetas)"], ["26", "(Narada Muni instructs the Pracetas)"], ["27", "(Lord Risabhadev instructs His 100 sons)"], ["28", "(Jada Bharata instructs Maharaja Rahugana)"], ["29", "(the residents of Jambudvipa offer prayers)"], ["30", "(Maharaja Pariksit)"], ["31", "(The Yamadutas reply to the Visnudutas)"], ["32", "(Yamaraja instructs the Yamadutas)"], ["33", "(Lord Siva instructs Parvati)"], ["34", "(Prahläda Mahäräja instructs Hiranyakasipu)"], ["35", "(Prahläda Mahäräja instructs his fellow students)"], ["36", "(Prahläda Mahäräja's prayer to Lord Nrsimha-deva)"], ["37", "(Lord Visnu instructs Durväsä Muni)"], ["38", "(King Yayäti instructs Devayäni)"], ["39", "(prayers by the demigods for Lord Krsna in Devaki's womb)"], ["40", "(Nanda Mahäräja to Gargamuni)"], ["41", "(Gargamuni to Nanda Mahäräja)"], ["42", "(Lord Brahmä's prayers to Lord Krsna)"], ["43", "(Lord Krsna speaking to His cowherd boyfriends)"], ["44", "(The gopis' prayers to Lord Krsna)"], ["45", "(Rukmini's letter to Lord Krsna)"], ["46", "(Sudämä Brähmana's thought while returning from Dvärakä)"], ["47", "(Lord Krsna's instructions to the gopis)"], ["48", "(The gopis speaking to Lord Krsna at the Kuruksetra solar eclipse)"], ["49", "(Lord Krsna speaks at the Kuruksetra solar eclipse)"], ["50", "(Lord Krsna instructs King Yudhisthira)"], ["51", "(Kavi Yogendra instructs King Nimi)"], ["52", "(Havi Yogendra instructs King Nimi)"], ["53", "(Prabuddha Yogendra instructs King Nimi)"], ["54", "(Sri Camasa Muni instructs King Nimi)"], ["55", "(Camasa Yogendra instructs King Nimi)"], ["56", "(Karabhäjana Yogendra instructs King Nimi)"], ["57", "(Sri Karabhäjana Muni instructs King Nimi)"], ["58", "(the Avadhüta brähmana instructs King Yadu)"], ["59", "(Lord Krsna instructs Uddhava)"], ["60", "(the Avanti brähmana)"], ["61", "(Uddhava to Lord Krsna)"], ["62", "(Süta Gosvämi instructs the sages of Naimisaranya)"], ["63", "(Süta Gosvämi)"]]);

var randBetween = function(start, end) {
  return Math.floor(Math.random() * (end-start)) + start;
};

var bg_verses = JSON.parse(BG);
var sb_verses = JSON.parse(SB);
var st = 0;
var bgl = bg_verses.length;
var sbl = sb_verses.length;
var en = bgl+sbl-1;
var bgb = 1;
// $(document).ready(function() {
chrome.storage.sync.get("bg", function(items) {
  console.log(items["bg"]);
  if(typeof(items["bg"]) === 'undefined' || items["bg"]===false){
    st = bgl;
    en = bgl+sbl-1;
    bgb = 0;
  }
  chrome.storage.sync.get("sb", function(items) {
    console.log(items["sb"]);
    if(typeof(items["sb"]) === 'undefined' || items["sb"]===false){
      st = 0;
      en = bgl-1;
    }

    if(bgb===0 && items["sb"]!=true ){
      document.getElementById("first").innerHTML = "<p>Please chose options by clicking the icon. </p>";
    }
    else{
      var ind = randBetween(st, en);
      console.log(ind);
      console.log(st);
      console.log(en);
      // ind = 405;
      var ver = "";
      if(ind < bg_verses.length){
        ver = "https://vedabase.io/en/library/" + bg_verses[ind] + " #content";
      }
      else{
        ver = "https://vedabase.io/en/library/" + sb_verses[ind - bg_verses.length].a + " #content";
        document.getElementById('second').innerHTML = map1.get(sb_verses[ind - bg_verses.length].b);
      }

      // $( "#first" ).load(ver);
      if (window.navigator.onLine) {
         document.getElementById("default").style.display = "none";
          $( "#first" ).load(ver);
      } else {
          document.getElementById("first").innerHTML='Sorry, No internet connection.';
      }

      /////////////////////////////////////////////
      $(document).ready(function(){
        chrome.storage.sync.get("dev", function(items) {
          if(typeof(items["dev"]) === 'undefined' || items["dev"]===false){
            // $('.wrapper-devanagari').css('display', 'none');
            $( "<style>.wrapper-devanagari {display: none}</style>" ).appendTo( "head" );
          }
        });

        chrome.storage.sync.get("eng", function(items) {
          if(typeof(items["eng"]) === 'undefined' || items["eng"]===false){
            // console.log(items["eng"]);
            // $('.wrapper-verse-text').css('display', 'none');
            $( "<style>.wrapper-verse-text {display: none}</style>" ).appendTo( "head" );
          }
        });

        chrome.storage.sync.get("wtw", function(items) {
          if(typeof(items["wtw"]) === 'undefined' || items["wtw"]===false){
            // $('.wrapper-synonyms').css('display', 'none');
            $( "<style>.wrapper-synonyms {display: none}</style>" ).appendTo( "head" );
          }
        });

        chrome.storage.sync.get("tra", function(items) {
          if(typeof(items["tra"]) === 'undefined' || items["tra"]===false){
            // $('.wrapper-translation').css('display', 'none');
            $( "<style>.wrapper-translation {display: none}</style>" ).appendTo( "head" );
          }
        });

        chrome.storage.sync.get("pur", function(items) {
          if(typeof(items["pur"]) === 'undefined' || items["pur"]===false){
            // console.log(items['pur']);
            // $('.wrapper-puport').css('display', 'none');
            $("<style>.wrapper-puport {display: none}</style>").appendTo("head");
          }
        });

    });
  }
});



});
