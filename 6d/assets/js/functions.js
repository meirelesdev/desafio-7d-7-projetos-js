
const showQuestion = () => {
    if (questions[currentQuestion]) {
        let q = questions[currentQuestion]
        showProgress()
        scoreArea.style.display = 'none'
        questionArea.style.display = 'block'
        question.innerHTML = q.question
        let optionsHtml = '';
        for(let i in q.options) {
            optionsHtml += `<div data-op="${i}" class="option">
                                <span>${parseInt(i)+1}</span>${q.options[i]}
                            </div>`
        }
        options.innerHTML = optionsHtml
        optionsInHtml = document.querySelectorAll('.options .option')
        optionsInHtml.forEach(item => item.addEventListener('click', optionClickEvent))
    } else {
        showProgress()
        finishQuiz()
    }
}
const finishQuiz = () => {
    let points = Math.floor((correctAnswers / questions.length) * 100)
    if(points < 30 ) {
        scoreText1.innerHTML = "Ta ruim em?!"
        scorePct.style.color = '#ff0000'
    } else if (points >=30 && points < 70) {
        scoreText1.innerHTML = "Muito Bom!"
        scorePct.style.color = '#ffff00'
    } else {
        scoreText1.innerHTML = "Parabéns!"
        scorePct.style.color = '#0D630D'
    }
    scorePct.innerHTML = `Acertou ${points}%`
    scoreText2.innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswers}.`
    scoreArea.style.display = 'block'
    questionArea.style.display = 'none'
}
const refresh = () => {
    correctAnswers = 0
    currentQuestion = 0
    showQuestion()
}
const showProgress = () => {
    let pct = Math.floor((currentQuestion / questions.length) * 100)
    progressBar.style.width = `${pct}%`
}
const optionClickEvent = event => {
    let clickedOption = parseInt(event.target.getAttribute('data-op'))
    if(questions[currentQuestion].answer === clickedOption) {
        correctAnswers++
    }
    currentQuestion++
    showQuestion()
}