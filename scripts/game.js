let localTheme = localStorage.getItem('localThemes')
console.log(localTheme)

/***ON REGARDE EN FONCTION DU THEME CE QU'ON IMPORTE DE LA BASE DE DONNEES***/
if (localTheme == '"animaux"') {
  let animalName = animals.name
  console.log(animalName)
  animalName = JSON.stringify(animalName)
  localStorage.setItem('localName', animalName)/**on stock les variables de json en local afin des les rappeler par la suite en fonction du thème**/
  let animalDescription = animals.description
  animalDescription = JSON.stringify(animalDescription)
  localStorage.setItem('localDes', animalDescription)
  let animalQuestion = animals.questions
  animalQuestion = JSON.stringify(animalQuestion)
  localStorage.setItem('localQuest', animalQuestion)
  let animalKey = animals.keyWords
  animalKey = JSON.stringify(animalKey)
  localStorage.setItem('localKey', animalKey)
  let animalDesKey = animals.descriptionKeyWords
  animalDesKey = JSON.stringify(animalDesKey)
  localStorage.setItem('localDesKey', animalDesKey)
  let animalSources = animals.sources
  animalSources = JSON.stringify(animalSources)
  localStorage.setItem('localSource', animalSources)
}
else if (localTheme == '"sports"') {
  let sportsName = sports.name
  sportsName = JSON.stringify(sportsName)
  localStorage.setItem('localName', sportsName)
  let sportsDescription = sports.description
  sportsDescription = JSON.stringify(sportsDescription)
  localStorage.setItem('localDes', sportsDescription)
  let sportsQuestion = sports.questions
  sportsQuestion = JSON.stringify(sportsQuestion)
  localStorage.setItem('localQuest', sportsQuestion)
  let sportsKey = sports.keyWords
  sportsKey = JSON.stringify(sportsKey)
  localStorage.setItem('localKey', sportsKey)
  let sportsDesKey = sports.descriptionKeyWords
  sportsDesKey = JSON.stringify(sportsDesKey)
  localStorage.setItem('localDesKey', sportsDesKey)
  let sportsSources = sports.sources
  sportsSources = JSON.stringify(sportsSources)
  localStorage.setItem('localSource', sportsSources)
}
else if (localTheme == '"alimentation"') {
  let alimentationName = aliments.name
  alimentationName = JSON.stringify(alimentationName)
  localStorage.setItem('localName', alimentationName)
  let alimentationDescription = aliments.description
  alimentationDescription = JSON.stringify(alimentationDescription)
  localStorage.setItem('localDes', alimentationDescription)
  let alimentationQuestion = aliments.questions
  alimentationQuestion = JSON.stringify(alimentationQuestion)
  localStorage.setItem('localQuest', alimentationQuestion)
  let alimentationKey = aliments.keyWords
  alimentationKey = JSON.stringify(alimentationKey)
  localStorage.setItem('localKey', alimentationKey)
  let alimentationDesKey = aliments.descriptionKeyWords
  alimentationDesKey = JSON.stringify(alimentationDesKey)
  localStorage.setItem('localDesKey', alimentationDesKey)
  let alimentationSources = aliments.sources
  alimentationSources = JSON.stringify(alimentationSources)
  localStorage.setItem('localSource', alimentationSources)
}
else if (localTheme == '"cinema"') {
  let moviesName = movies.name
  moviesName = JSON.stringify(moviesName)
  localStorage.setItem('localName', moviesName)
  let moviesDescription = movies.description
  moviesDescription = JSON.stringify(moviesDescription)
  localStorage.setItem('localDes', moviesDescription)
  let moviesQuestion = movies.questions
  moviesQuestion = JSON.stringify(moviesQuestion)
  localStorage.setItem('localQuest', moviesQuestion)
  let moviesKey = movies.keyWords
  moviesKey = JSON.stringify(moviesKey)
  localStorage.setItem('localKey', moviesKey)
  let moviesDesKey = movies.descriptionKeyWords
  moviesDesKey = JSON.stringify(moviesDesKey)
  localStorage.setItem('localDesKey', moviesDesKey)
  let moviesSources = movies.sources
  moviesSources = JSON.stringify(moviesSources)
  localStorage.setItem('localSource', moviesSources)
}
else if (localTheme == '"pays"') {
  let countriesName = countries.name
  countriesName = JSON.stringify(countriesName)
  localStorage.setItem('localName', countriesName)
  let countriesDescription = countries.description
  countriesDescription = JSON.stringify(countriesDescription)
  localStorage.setItem('localDes', countriesDescription)
  let countriesQuestion = countries.questions
  countriesQuestion = JSON.stringify(countriesQuestion)
  localStorage.setItem('localQuest', countriesQuestion)
  let countriesKey = countries.keyWords
  countriesKey = JSON.stringify(countriesKey)
  localStorage.setItem('localKey', countriesKey)
  let countriesDesKey = countries.descriptionKeyWords
  countriesDesKey = JSON.stringify(countriesDesKey)
  localStorage.setItem('localDesKey', countriesDesKey)
  let countriesSources = countries.sources
  countriesSources = JSON.stringify(countriesSources)
  localStorage.setItem('localSource', countriesSources)
}
else if (localTheme == '"rois"') {
  let kingsName = kings.name
  kingsName = JSON.stringify(kingsName)
  localStorage.setItem('localName', kingsName)
  let kingsDescription = kings.description
  kingsDescription = JSON.stringify(kingsDescription)
  localStorage.setItem('localDes', kingsDescription)
  let kingsQuestion = kings.questions
  kingsQuestion = JSON.stringify(kingsQuestion)
  localStorage.setItem('localQuest', kingsQuestion)
  let kingsKey = kings.keyWords
  kingsKey = JSON.stringify(kingsKey)
  localStorage.setItem('localKey', kingsKey)
  let kingsDesKey = kings.descriptionKeyWords
  kingsDesKey = JSON.stringify(kingsDesKey)
  localStorage.setItem('localDesKey', kingsDesKey)
  let kingsSources = kings.sources
  kingsSources = JSON.stringify(kingsSources)
  localStorage.setItem('localSource', kingsSources)
}


/***On récupère sous forme de tableau les valeurs du local storage**/
let localName = localStorage.getItem('localName')
localName = JSON.parse(localName)
console.log(localName)
let localDes = localStorage.getItem('localDes')
localDes = JSON.parse(localDes)
let localQuest = localStorage.getItem('localQuest')
localQuest = JSON.parse(localQuest)
let localSource = localStorage.getItem('localSource')
localSource = JSON.parse(localSource)
let localDesKey = localStorage.getItem('localDesKey')
localDesKey = JSON.parse(localDesKey)
let localKey = localStorage.getItem('localKey')
localKey = JSON.parse(localKey)

let headDb=localSource /**sources img***/
let headDbName=localName/**nom**/
let headDescriptionDb=localDesKey/**keyWords**/
let questionsDb=localQuest/**questions**/
let questionsDescriptionDb=localKey/**keyWords question**/
let imageDescription=localDes/**description mot**/
console.log(headDbName)
let headPlayZone=document.getElementById('play')
let errorNumber=0
let cardsCount=0
function randomHeadChoice(headDb,headDbName,headDescriptionDb){
  let headChoice
  let headDesciption
  for(let i=0; i<18; i++){
    randomNumber=Math.floor(Math.random()*(headDb.length))
    headChoice=headDb[randomNumber]
    headDesciption=headDescriptionDb[randomNumber]
    let divHead=document.createElement('div')
    let imageHead=document.createElement('IMG')
    divHead.classList.add('cards')
    imageHead.setAttribute('src', headChoice)
    imageHead.setAttribute('id',headDbName[randomNumber])
    imageHead.setAttribute('class',headDescriptionDb[randomNumber])
    headPlayZone.appendChild(divHead)
    divHead.appendChild(imageHead)
    let descriptionSpan=document.createElement('span')
    let descriptionText=document.createTextNode(headDbName[randomNumber])
    descriptionSpan.classList.add('description')
    divHead.appendChild(descriptionSpan)
    descriptionSpan.appendChild(descriptionText)
    headDb.splice(randomNumber,1)
    headDescriptionDb.splice(randomNumber,1)
    headDbName.splice(randomNumber,1)
  }
}
randomHeadChoice(headDb,headDbName,headDescriptionDb)
let questionsZone=document.getElementById('questions')
function randomQuestions(questionsDb){
  let questionsTook=new Array()
  for(let k=0; k<3; k++){
    let randomQuestionNumber=Math.floor(Math.random()*questionsDb.length)
    questionsTook.push()
    let questions=document.createElement('input')
    questions.setAttribute('type','button')
    questions.setAttribute('value',questionsDb[randomQuestionNumber])
    questions.setAttribute('name',questionsDescriptionDb[randomQuestionNumber])
    questions.classList.add('questions')
    questionsZone.appendChild(questions)
  }
}
randomQuestions(questionsDb,questionsDescriptionDb)
function questionChoice(){
  let questions=document.querySelectorAll('.questions')
  for(let l=0; l<questions.length; l++){
      questions[l].addEventListener('click', function(){
        for(let m=0; m<questionsDb.length; m++){
          if(questions[l].value==questionsDb[m]){
            questionsDb.splice(m,1)
            questionsDescriptionDb.splice(m,1)
          }
        }
        let questionClass=questions[l].getAttribute('name')
        headAnalyze(questionClass)
        questionsZone.innerHTML=""
        randomQuestions(questionsDb)
        questionChoice()
      },
    )
  }
}
questionChoice()
let cardSelection=headPlayZone.querySelectorAll('img')
console.log(cardSelection)
let computerChoiceNumber=Math.round(Math.random()*cardSelection.length)
let computerChoice=cardSelection[computerChoiceNumber].getAttribute('id')
let computerChoiceDescription=cardSelection[computerChoiceNumber].classList
console.log(computerChoiceDescription)
console.log(computerChoice)
function headAnalyze(questionClass){
  console.log(computerChoiceDescription)
  let result="NON"
  for(let i=0; i<computerChoiceDescription.length; i++){
    if(questionClass==computerChoiceDescription[i]){
      result="OUI"
      userChoices(computerChoiceDescription[i],questionClass, result)
    }
    else{
      userChoices(computerChoiceDescription[i],questionClass, result)
    }
  }
  document.querySelector('#informations').innerHTML=result
}
function userChoices(computerChoiceDescription,questionClass, result){
  let cardsChose=new Array()
  let cards=headPlayZone.querySelectorAll('div .cards')
  for(let i=0; i<cardSelection.length; i++){
    cards[i].addEventListener('click', function(){
      if((cardSelection[i].classList.contains(questionClass)==true && result=="OUI") || (cardSelection[i].classList.contains(questionClass)==false && result=="NON")){
        console.log(cardSelection[i].classList)
        errorNumber+=1/computerChoiceDescription.length
        console.log('erreur !')
      }
      else if((cardSelection[i].classList.contains(questionClass)==false && result=="OUI") || (cardSelection[i].classList.contains(questionClass)==true && result=="NON")){
        cards[i].style.backgroundColor='#2C4DAA'
        cards[i].classList.add('chose')
        cards[i].querySelector('.description').remove()
        cards[i].querySelector('IMG').classList.add('blue_monster')
        cards[i].querySelector('IMG').src='../images/blue_monster.png'
        cardsChose.push(cards[i].querySelector('IMG').getAttribute('id'))
        console.log(cardsChose)
        cardsCount+=1
        console.log(cardsCount)
      }
    })
  }
  cardsCount=0
}
