// const question=document.querySelector('#question');
// const choices=Array.from(document.querySelectorAll('.choice-text');)
// const progressText=document.querySelector('#progressText');
// const scoreText=document.querySelector('#score');
// const progressBarFull=document.querySelector('#progressBarFull');

// let currentQuestion={}
// let acceptingAnswers= true
// let score =0
// let questionCounter= 0
// let availableQuestions=[]

// let questions = [
// 	{
// 		question: 
// 			"Q1",
// 		choice1: 'choice1',
// 		choice2: 'choice2',
// 		choice3: 'choice3',
// 		choice4: 'choice4',
// 		answer: 'choice1',
// 	},
// 	{
// 		question:
// 			"Q2",
// 		choice1: 'choice1',
// 		choice2: 'choice2',
// 		choice3: 'choice3',
// 		choice4: 'choice4',
// 		answer: 'choice1',
// 	},
// 	{
// 		question: 
// 			"Q3",
// 		choice1: 'choice1',
// 		choice2: 'choice2',
// 		choice3: 'choice3',
// 		choice4: 'choice4',
// 		answer: 'choice1',
// 	},
// 	{
// 		question: 
// 			"Q4",
// 		choice1: 'choice1',
// 		choice2: 'choice2',
// 		choice3: 'choice3',
// 		choice4: 'choice4',
// 		answer: 'choice1',
// 	},
// 	{
// 		question:
// 			"Q5",
// 		choice1: 'choice1',
// 		choice2: 'choice2',
// 		choice3: 'choice3',
// 		choice4: 'choice4',
// 		answer: 'choice1',
// 	},
// 	{
// 		question: 
// 			"Q6",
// 		choice1: 'choice1',
// 		choice2: 'choice2',
// 		choice3: 'choice3',
// 		choice4: 'choice4',
// 		answer: 'choice1',
// 	},
// 	{
// 		question: 
// 			"Q7",
// 		choice1: 'choice1',
// 		choice2: 'choice2',
// 		choice3: 'choice3',
// 		choice4: 'choice4',
// 		answer: 'choice1',
// 	},
// 	{
// 		question: 
// 			"Q8",
// 		choice1: 'choice1',
// 		choice2: 'choice2',
// 		choice3: 'choice3',
// 		choice4: 'choice4',
// 		answer: 'choice1',
// 	},
// 	{
// 		question: 
// 			"Q9",
// 		choice1: 'choice1',
// 		choice2: 'choice2',
// 		choice3: 'choice3',
// 		choice4: 'choice4',
// 		answer: 'choice1',
// 	},
// 	{
// 		question: 
// 			"Q10",
// 		choice1: 'choice1',
// 		choice2: 'choice2',
// 		choice3: 'choice3',
// 		choice4: 'choice4',
// 		answer: 'choice1',
// 	}
// 	]
	
// 	const SCORE_POINTS = 100
// 	const MAX_QUESTIONS = 10
//     startGame=() => {
// 	questionCounter=0
// 	score = 0
// 	availableQuestions = [...questions]
// 	getNewQuestion()
// 	}

// 	getNewQuestion= () => {
// 		if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
// 			localStorage.setItem('mostRecentScore', score)
			
// 			return window.location.assign('/end.html')
			
// 		}
// 		questionCounter++
// 		progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
// 		progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS)*100}%`
		
// 		const questionsIndex=Math.floor(Math.random()*availableQuestions.length)
// 		currentQuestion = availableQuestions[questionsIndex]
// 		question.innerText = currentQuestion.question
		
// 		choices.forEach(choice => {
// 			const number = choice.dataset['number']
// 			choice.innerText= currentQuestion['choice'+ number]
			
// 		})
// 		availableQuestions.splice(questionsIndex, 1)
// 		acceptingAnswers = true 
		
// 	}
	
	
// 		choices.forEach(choice => {
// 			choice.addEventListener('click', e =>{
// 				if(!acceptingAnswers) return
				
// 				acceptingAnswers= false
// 				const selectedChoice= e.target
// 				const selectedAnswer= selectedChoice.dataset['number']
				
// 				let classToApply = selectedAnswer ==cuurentQuestion.answer ? 'correct':'incorrect'
				
// 				if(classToApply==='correct'){
// 					incrementScore(SCORE_POINTS)
// 				}
				
// 				selectedChoice.parentElement.classList.add(classToApply)
				
// 				setTimeOut(() => {
// 					selectedChoice.parentElement.classList.remove(classToApply)	
// 					getNewQuestion()
// 					}, 1000)
// 			})
// 		})
	
// 	incrementScore = num => {
// 		score+=num
// 		scoreText.innerText=score
// 	}
	
	
// startGame()



const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Which of the following can best prevent cybercrime?',
        choice1: 'Deleting all browser cookies',
        choice2: 'Using strong, complex passwords',
        choice3: 'Sharing all your information with your friends so they can remember for you',
        choice4: 'None of the above',
        answer: 2,
    },
    {
        question:"What is a DDos attack?",
        choice1:"Several computer systems spam a web server with so many requests so close together that it crashes",
        choice2: "When someone steals your personal information through cybercrime (identity theft, stealing private money, etc.)",
        choice3: "A protocol that defines the layout of an Internet address",
        choice4: "A laid out method of encrypting data through two different keys: a public key and a private key",
        answer: 1,
    },
    {
        question: "What is one method to prevent malicious cyber attacks?",
        choice1: "Clicking a link from an unknown emailer",
        choice2: "Take part in DNS spoofing",
        choice3: "Using antivirus software to delete and detect malicious programs",
        choice4: "Replying to unwanted electronic messages",
        answer: 3,
    },
    {
        question: "What is phishing?",
        choice1: "When websites or applications falsely pose as legitimate companies or institutions in order to gain access to sensitive personal information",
        choice2: "Feeding your computer the wrong IP address for a given website",
        choice3: "When hackers use your personal information (i.e. credit card for their own benefit)",
        choice4: "All of the above",
        answer: 1,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()