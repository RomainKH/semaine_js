let select = document.querySelector('#age form select')
let varSelect = new Array ()
let jeune = "jeune"
let vieux = "vieux"
let localAge=localStorage.getItem('localAge')

if (select !== null) {

  select.addEventListener(
    "change",
    function() {
      let userChoice = select.options[select.selectedIndex].value
      location.href = "pages/home_page.html"
      localStorage.setItem('localAge', userChoice)
      console.log(userChoice)
    })
}
console.log(localAge)

if (localAge < 10) {
  let child = document.querySelectorAll('.teen')
  for (var i = 0; i < child.length; i++) {
    child[i].classList.remove('teen')
    child[i].classList.add('child')
  }
}

else if (10 <= localAge) {
  let teen = document.querySelectorAll('.child')
  for (var i = 0; i < teen.length; i++) {
    teen[i].classList.remove('child')
    teen[i].classList.add('teen')
  }
}

/*****CATEGORIES****/

let category = document.querySelector('#category'),
    themes = category.querySelectorAll('div'),
    categories = []

if (localAge < 10){
  let themesJeune = ['alimentation','sports','animaux']
  let theme = document.querySelectorAll('#category div')

  for (var i = 0; i < themesJeune.length; i++) {
    let img = document.createElement('img')
    img.setAttribute('src',`../images/${themesJeune[i]}.svg`)
    theme[i].setAttribute('id', themesJeune[i])
    theme[i].appendChild(img)
    }
  }





else if (localAge >= 10){
  let themesVieux = document.createElement('div')

}

let boutonUn = document.querySelector('#category div .un'),
    boutonDeux = document.querySelector('#category div .deux'),
    boutonTrois = document.querySelector('#category div .trois')

for (var i = 0; i < themes.length; i++) {
    categories.push(themes[i].getAttribute('id'))
  }

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


  let localThemes = localStorage.getItem('localThemes')
  console.log(localThemes)
