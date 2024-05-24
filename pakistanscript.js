document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "Who inaugurated the State Bank of Pakistan?",
            options: ["Quaid-e-Azam", "Malik Ghulam Muhammad", "Liaquat Ali Khan", "Allama Muhammad Iqbal"],
            answer: "Quaid-e-Azam"
        },
        {
            question: "Sardar Abdur Rub Nishtar was the Governor of?",
            options: ["Gilgit Baltistan", "KPK", "Punjab", "Sindh"],
            answer: "KPK"
        },
        {
            question: "National code of Pakistan is?",
            options: ["PAK", "PK", "PAK 1", "None of them"],
            answer: "PK"
        },
        {
            question: "Where is Warsak Dam of Pakistan situated?",
            options: ["Khyber Pakhtunkhwa", "Punjab", "Sindh", "Balochistan"],
            answer: "Khyber Pakhtunkhwa"
        },
        {
            question: "Shakarparrian is situated in?",
            options: ["Islamabad", "Rawalpindi", "Murree", "Peshawar"],
            answer: "Islamabad"
        },
        {
            question: "Identify the largest cantonment of Pakistan?",
            options: ["Kharian Cantt", "Quetta Cantt", "Okara Cantt", "Karachi Cantt"],
            answer: "Karachi Cantt"
        },
        {
            question: "Which city of Pakistan held the OIC Conference in 1997?",
            options: ["Lahore", "Islamabad", "Karachi", "Peshawar"],
            answer: "Islamabad"
        },
        {
            question: "In which year was OIC founded?",
            options: ["1970", "1975", "1980", "1969"],
            answer: "1969"
        },
        {
            question: "The Kargil incident happened in?",
            options: ["1998", "1997", "1999", "2000"],
            answer: "1999"
        },
        {
            question: "Which country assisted Pakistan in the construction of Sandak Project?",
            options: ["Iran", "Saudi Arabia", "Afghanistan", "China"],
            answer: "China"
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
