document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "Which is the outermost planet in the solar system?",
            options: ["Mercury", "Pluto", "Neptune", "Uranus"],
            answer: "Neptune"
        },
        {
            question: "Severe deficiency of Vitamin D results in __________.",
            options: ["scurvy", "rickets", "night blindness", "None of these"],
            answer: "rickets"
        },
        {
            question: "The SI unit of charge is __________?",
            options: ["Ampere", "Coulomb", "Ohm", "Volt"],
            answer: "Coulomb"
        },
        {
            question: "Long-sight defect could be corrected by using __________ lens?",
            options: ["concave", "Convex", "diverging", "none of these"],
            answer: "Convex"
        },
        {
            question: "Deficiency of Vitamin-A results in __________?",
            options: ["Night blindness", "rickets", "scurvy", "hair fall"],
            answer: "Night blindness"
        },
        {
            question: "For a fixed mass of gas at constant temperature, if we decrease volume, the pressure will _________?",
            options: ["also decrease", "increase", "remains constant", "none of these"],
            answer: "increase"
        },
        {
            question: "The lifespan of Red Blood Cells is __________ days?",
            options: ["60", "120", "180", "240"],
            answer: "120"
        },
        {
            question: "The density of water is __________?",
            options: ["1 g/cm3", "1.5 g/cm3", "2 g/cm3", "none of these"],
            answer: "1 g/cm3"
        },
        {
            question: "Radioactivity was discovered by __________?",
            options: ["Kelvin", "Thomson", "Rutherford", "Becquerel"],
            answer: "Becquerel"
        },
        {
            question: "A device which converts chemical energy into electrical energy is called __________?",
            options: ["motor", "generator", "moving-coil meter", "battery"],
            answer: "battery"
        }
    ];

    function buildQuiz() {
        const quizContainer = document.getElementById('quiz');
        const output = [];

        quizData.forEach((currentQuestion, questionNumber) => {
            const options = [];

            for (let i = 0; i < currentQuestion.options.length; i++) {
                options.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${currentQuestion.options[i]}">
                        ${currentQuestion.options[i]}
                    </label>`
                );
            }

            output.push(
                `<div class="question">${currentQuestion.question}</div>
                <div class="options">${options.join('')}</div>`
            );
        });

        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        const quizContainer = document.getElementById('quiz');
        const answerContainers = quizContainer.querySelectorAll('.options');
        let numCorrect = 0;

        quizData.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.answer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'green';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = `${numCorrect} out of ${quizData.length}`;
    }

    buildQuiz();

    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', showResults);
});
