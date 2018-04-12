let headDb=['../images/oeufs.svg','../images/poivron.svg','../images/pomme.svg','../images/bananes.svg','../images/chocolat.svg','../images/citron.svg','../images/fromage.svg','../images/pates.svg','../images/pain.svg','../images/riz.svg','../images/raisin.svg','../images/orange.svg','../images/concombre.svg','../images/viande.svg','../images/tomate.svg','../images/salade.svg','../images/carotte.svg','../images/radis.svg','../images/pizza.svg','../images/hamburger.svg','../images/poisson.svg','../images/fraise.svg','../images/broccoli.svg','../images/poire.svg','../images/ananas.svg','../images/poulet.svg','../images/oignon.svg']
let headDbName=['oeufs','poivrons','pomme','banane','chocolat','citron','fromage','pâtes','pain','riz','raisin','orange','concombre','viande hachée','tomate','salade','carotte','radis','pizza','hamburger','poisson','fraise','broccoli','poire','ananas','poulet','oignon']
let headDescriptionDb=['pas_vegan rond protéines','pousse_terre légume peau rouge_jaune','fruit jus peau sucré arbre rond pépins rouge_jaune','fruit peau sucré arbre rouge_jaune','transformé sucré','fruit jus peau arbre rond pépins rouge_jaune','transformé pas_vegan protéines','féculent rouge_jaune','transformé féculent','pousse_terre féculent','fruit jus peau sucré arbre rond pépins','fruit jus peau sucré arbre rond pépins','pousse_terre légume peau','transformé pas_vegan protéines','fruit jus peau rond rouge_jaune','pousse_terre légume','pousse_terre légume peau','pousse_terre légume','transformé pas_vegan rond','transformé pas_vegan','pas_vegan peau protéines','fruit jus sucré rouge_jaune','pousse_terre','fruit peau sucré pépins arbre','fruit jus peau sucré','pas_vegan peau protéines','pousse_terre légume peau rond']
let questionsDb=["Est-ce que l'aliment est un fruit ?","Est-ce que l'aliment est transformé ?","Est-ce que ça pousse dans la terre ?","Est-ce que l'aliment n'est pas vegan ?","Est-ce que c'est un légume ?","Est-ce que c'est un fruit à jus ?","Est-ce que l'aliment a une peau ?","Est-ce que c'est un féculent ?","Est-ce que c'est un aliment riche en protéines ?","Est-ce que l'aliment est sucré ?","Est-ce que cet aliment pousse dans un arbre ?","Est-ce que ça a une forme ronde ?","Est-ce que l'aliment a des pépins ?","Est-ce que ça a une couleur rouge ou jaune ?"]
let questionsDescriptionDb=["fruit","transformé","pousse_terre","pas_vegan","légume","jus","peau","féculent","protéines","sucré","arbre","rond","pépins","rouge_jaune"]
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
