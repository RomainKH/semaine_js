/*****CHOIX AGE******/

let select = document.querySelector('#age form select')
let varSelect = new Array ()
let jeune = "jeune"
let vieux = "vieux"
let localAge=localStorage.getItem('localAge')

if (select !== null) {

  select.addEventListener( /***au click reprend la valeur de l'âge chosi*****/
    "change",
    function() {
      let userChoice = select.options[select.selectedIndex].value
      location.href = "pages/home_page.html"
      localStorage.setItem('localAge', userChoice) /***store la valeur de l'age de l'utilisateur en localStorage***/
      console.log(userChoice)
    })
}

if (localAge < 10) {/***change le thème si age strictement inférieur à 10*****/
  let child = document.querySelectorAll('.teen')
  for (var i = 0; i < child.length; i++) {
    child[i].classList.remove('teen')
    child[i].classList.add('child')
  }
}

else if (10 <= localAge) {/*****change le thème pour les enfants de 10 ans et plus****/
  let teen = document.querySelectorAll('.child')
  for (var i = 0; i < teen.length; i++) {
    teen[i].classList.remove('child')
    teen[i].classList.add('teen')
  }
}

/*****CATEGORIES****/

/****change les thèmes selon l'âge***/
if (localAge < 10){
  let themesJeune = ['alimentation','sports','animaux']
  let theme = document.querySelectorAll('#category div')
  let number = ['un','deux','trois']
  for (var i = 0; i < themesJeune.length; i++) {
    let img = document.createElement('img')
    let liens = document.createElement('a')
    liens.setAttribute('class', number[i])
    liens.setAttribute('href','game.html')
    img.setAttribute('src',`../images/${themesJeune[i]}.svg`)
    theme[i].setAttribute('id', themesJeune[i])
    theme[i].appendChild(liens)
    liens.appendChild(img)

    }
  }

else if (localAge >= 10){
  let themesVieux = ['cinema','pays','rois']
  let theme = document.querySelectorAll('#category div')
  let number = ['un','deux','trois']
  for (var i = 0; i < themesVieux.length; i++) {
    let img = document.createElement('img')
    let liens = document.createElement('a')
    liens.setAttribute('class', number[i])
    liens.setAttribute('href','game.html')
    img.setAttribute('src',`../images/${themesVieux[i]}.svg`)
    theme[i].setAttribute('id', themesVieux[i])
    theme[i].appendChild(liens)
    liens.appendChild(img)

    }
}

/****localstorage pour le choix des thèmes*****/
let category = document.querySelector('#category'),
    themes = category.querySelectorAll('div'),
    categories = []
let boutonUn = document.querySelector('#category div .un'),
    boutonDeux = document.querySelector('#category div .deux'),
    boutonTrois = document.querySelector('#category div .trois')

for (var i = 0; i < themes.length; i++) {
    categories.push(themes[i].getAttribute('id'))
  }

/****Relie les boutons des liens***/
  boutonUn.addEventListener(
    "click",function(){
      categories = JSON.stringify(categories[0])
      localStorage.setItem('localThemes', categories)
    }
  )

  boutonDeux.addEventListener(
    "click",function(){
      categories = JSON.stringify(categories[1])
      localStorage.setItem('localThemes', categories)
    }
  )

  boutonTrois.addEventListener(
    "click",function(){
      categories = JSON.stringify(categories[2])
      localStorage.setItem('localThemes', categories)
    }
  )
