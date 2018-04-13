let localTheme = localStorage.getItem('localThemes')

/***ON REGARDE EN FONCTION DU THEME CE QU'ON IMPORTE DE LA BASE DE DONNEES***/
if (localTheme == '"animaux"') {
  let animalName = animals.name
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
let objectDescription=localDes/**description mot**/
let headPlayZone=document.getElementById('play')
let errorNumber=0
let cardsCount=0
//On choisit aléatoirement 18 cartes et on y instaure un nom, des keywords et une images
//On retire aussi les cartes utilisées des différentes bases de données pour ne pas la retire
function randomHeadChoice(headDb,headDbName,headDescriptionDb,objectDescription){
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
    imageHead.setAttribute('description',objectDescription[randomNumber])
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
    objectDescription.splice(randomNumber,1)
  }
}
randomHeadChoice(headDb,headDbName,headDescriptionDb,objectDescription)


//On génère aléatoire 3 questions dans 3 boutons pour que l'utilisateur choisisse
//et on les associes à des keywords pour analyser les choix de l'utilisateur en fonction des questions après
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


//On regarde sur quelle question a cliqué l'utilisateur, et on appelle des fonctions pour analyser
//et regénérer des questions
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


//On demande à l'ordinateur de choisir un nombre aléatoire, qui sera la carte n°(choix ordinateur)
//et on récupère diverses informations comme les keywords
let cardSelection=headPlayZone.querySelectorAll('img')
let computerChoiceNumber=Math.round(Math.random()*cardSelection.length)
let computerChoice=cardSelection[computerChoiceNumber].getAttribute('id')
let computerChoiceDescription=cardSelection[computerChoiceNumber].classList


//On analyse la question en fonction du choix de l'ordinateur pour répondre OUI ou NON
function headAnalyze(questionClass){
  let result="Réponse : NON"
  for(let i=0; i<computerChoiceDescription.length; i++){
    if(questionClass==computerChoiceDescription[i]){
      result="Réponse : OUI"
      userChoices(computerChoiceDescription[i],questionClass, result)
    }
    else{
      userChoices(computerChoiceDescription[i],questionClass, result)
    }
  }
  document.querySelector('#result').setAttribute('value',result)
}


//On analyse la carte choisi en fonction de la question choisie
//Si la carte possède le même keyword que la question dans les class, et que la réponse à la question est OUI
//alors on ne peut pas retourner la carte et si on clique dessus on a une erreur. Sinon, on peut la cliquer.
function userChoices(computerChoiceDescription,questionClass, result){
  let cards=headPlayZone.querySelectorAll('div .cards')
  for(let i=0; i<cardSelection.length; i++){
    cards[i].addEventListener('click', function(){
      let cardsChose=document.querySelectorAll('.chose')
      if(cardsCount>14){
        let buttonFinal=document.querySelector('#validation')
        for(let k=0; k<3; k++){
          buttonFinal.style.backgroundColor='#F7BB21'
        }
      }
      else if((cardSelection[i].classList.contains(questionClass)==true && result=="Réponse : OUI") || (cardSelection[i].classList.contains(questionClass)==false && result=="Réponse : NON")){
        errorNumber+=1/cardSelection[i].classList.length
        document.querySelector('#errors').setAttribute('value',`Nombre d'erreurs : ${Math.floor(errorNumber)}`)
      }
      else if((cardSelection[i].classList.contains(questionClass)==false && result=="Réponse : OUI") || (cardSelection[i].classList.contains(questionClass)==true && result=="Réponse : NON")){
        cards[i].style.backgroundColor='#2C4DAA'
        cards[i].classList.add('chose')
        cards[i].querySelector('.description').remove()
        cards[i].querySelector('IMG').classList.add('blue_monster')
        cards[i].querySelector('IMG').src='../images/blue_monster.png'
        cardsCount+=1
      }
    })
  }
}

//On définit une variable qui contient toutes les cartes
let hover = document.querySelectorAll('.cards')

//On affiche la popup (gagné ! rejouer ?) quand on gagne avec deux sons
function winDisplay(hover,win,applauds){
  for(k=0; k<hover.length; k++){
    hover[k].remove()
  }
  document.querySelector('#questions').remove()
  document.querySelector('#play').setAttribute('id','win')
  document.querySelector('h1').innerHTML="Tu as gagné !"
  document.querySelector("#answer").innerHTML=`Tu as trouvé : ${computerChoice}`
  win.play()
  applauds.play()
}

//On affiche la popup (perdu !, rejouer ?) quand on perd avec un son
function looseDisplay(hover,loose){
  for(k=0; k<hover.length; k++){
    hover[k].remove()
  }
  document.querySelector('#questions').remove()
  document.querySelector('#play').setAttribute('id','win')
  document.querySelector('h1').innerHTML="Tu as perdu !"
  document.querySelector("#answer").innerHTML=`La réponse était : ${computerChoice}`
  loose.play()
}


//On dit à l'utilisateur de faire son choix final, donc de donner la carte tirée par l'ordinateur
//Si ça correspond, on a la fonction win
//Sinon, fonction loose
function chooseFinal(computerChoice){
  let buttonFinal=document.querySelector('#validation')
  let win=new Audio('../sounds/win.mp3')
  let loose=new Audio('../sounds/loose.mp3')
  let applauds=new Audio('../sounds/applauds.mp3')
  buttonFinal.addEventListener('click', function(){
    buttonFinal.style.backgroundColor='#F7BB21'
    for(let i=0; i<hover.length; i++){
      hover[i].addEventListener('click', function(){
        let choiceName=hover[i].querySelector('img').getAttribute('id')
        if(choiceName==computerChoice){
          winDisplay(hover,win,applauds)
        }
        else{
          looseDisplay(hover,loose)
        }
      })
    }
  })
}
chooseFinal(computerChoice)

///Variables pour afficher des descriptions d'objets (informations en plus, image...)
let title = document.querySelector('#informations h2')
let image = document.querySelector('#informations img')
let description = document.querySelector('#informations p')
let imageInformation=document.querySelectorAll('.cards img')

//On les affiche en créant des éléments, avec un mouseover sur la bonne carte
for (let i = 0; i < hover.length; i++) {
  hover[i].addEventListener(
    'mouseover',
    function() {
      let displayedImage=imageInformation[i].getAttribute('src')
      let imageDescription=imageInformation[i].getAttribute('description')
      title.appendChild(document.createTextNode(''))
      image.setAttribute('src', displayedImage)
      description.innerHTML=""
      description.appendChild(document.createTextNode(imageDescription))
    }
  )
}
