const boutonUn = document.querySelector('#category div .un')
const boutonDeux = document.querySelector('#category div .deux')
const boutonTrois = document.querySelector('#category div .trois')

let category = document.querySelector('#category'),
    themes = category.querySelectorAll('div'),
    categories = []

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

console.log("Catégories: ", categories)
console.log(categories[1])
