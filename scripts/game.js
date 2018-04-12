let localThemes = localStorage.getItem('localThemes')
if (localThemes == animaux) {
  let animalsName = animals.
}
else if (localThemes == sports) {
  let sportsName = sports.
}
else if (localThemes == alimentation) {

}
else if (localThemes == cinema) {

}
else if (localThemes == pays) {

}
else if (localThemes == rois) {

}

let headDb=[]
let headDbName=[]
let headDescriptionDb=[]
let questionsDb=[]
let questionsDescriptionDb=[]
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
