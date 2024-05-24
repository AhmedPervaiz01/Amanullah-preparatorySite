document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "International Youth Day is observed every year on _____________?",
            options: ["10 August", "11 August", "12 August", "13 August"],
            answer: "12 August"
        },
        {
            question: "International Day of Yoga is celebrated every year on _____________?",
            options: ["21 April", "21 June", "31 July", "31 August"],
            answer: "21 June"
        },
        {
            question: "American boxer Muhammad Ali died in _____________?",
            options: ["2014", "2015", "2016", "2017"],
            answer: "2016"
        },
        {
            question: "Which day is celebrated as the World Zoonoses Day?",
            options: ["July 6th", "June 5th", "June 6th", "July 8th"],
            answer: "July 6th"
        },
        {
            question: "Which Indian city is known as 'Scotland of India'?",
            options: ["Dharamshala", "Coorg", "Manali", "Darjeeling"],
            answer: "Coorg"
        },
        {
            question: "The fastest speed of jet ever recorded was ________?",
            options: ["Mach 3.43", "Mach 2.91", "Mach 6.72", "None of These"],
            answer: "Mach 6.72"
        },
        {
            question: "Which Indian State is world famous for its backwaters?",
            options: ["Himachal Pradesh", "Tamil Nadu", "Kerala", "Goa"],
            answer: "Kerala"
        },
        {
            question: "Suneung, often called the world's toughest exam, is held in _______________?",
            options: ["Japan", "China", "South Korea", "Thailand"],
            answer: "South Korea"
        },
        {
            question: "Bucharest is the capital and largest city of _____________?",
            options: ["Cuba", "Romania", "Thailand", "Cambodia"],
            answer: "Romania"
        },
        {
            question: "Which two water bodies are connected by the world's longest strait?",
            options: ["Andaman Sea & South China Sea", "Pacific Ocean & Indian Ocean", "Indonesia & Malaysia", "Both A & B"],
            answer: "Both A & B"
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
