const agesOne = document.getElementsByClassName('fiveEight')
const agesTwo = document.getElementsByClassName('nineEleven')
const agesThree = document.getElementsByClassName('twelveUp')

function loadPage(href){
  let xmlhttp = new XMLHttpRequest()
  xmlhttp.open("GET", href, false)
  xmlhttp.send()
  return xmlhttp.responseText
}
for (var i = 0; i < agesOne.length; i++) {
  agesOne[i].addEventListener(
    "click",
    function(){
      loadPage('pages/game-child.html')
    }
  )
}
