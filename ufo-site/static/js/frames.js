var map = document.getElementById("map");

function linkButtonToMap(year) {
   var button = document.getElementById(year);
   button.onclick = function () {
      map.setAttribute("src", "static/" + year + ".html");
   }
}

linkButtonToMap("1940s");
linkButtonToMap("1950s");
linkButtonToMap("1960s");
linkButtonToMap("1970s");
linkButtonToMap("1980s");
linkButtonToMap("1990s");
linkButtonToMap("2000s");
linkButtonToMap("2010s");