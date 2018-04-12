let boutonUn = document.querySelector('#category div .un'),
    boutonDeux = document.querySelector('#category div .deux'),
    boutonTrois = document.querySelector('#category div .trois')


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
