document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "Cave Hira is in the _________ mountain.",
            options: ["As-Safa", "Sil", "Uhud", "An-Noor"],
            answer: "An-Noor"
        },
        {
            question: "Name the wife of Prophet Muhammad (PBUH) who was daughter of Umar Farooq (R.A)?",
            options: ["Aisha (R.A)", "Juwairyyah (R.A)", "Hafsah (R.A)", "Maimoonah (R.A)"],
            answer: "Hafsah (R.A)"
        },
        {
            question: "What was the relation between Prophet Ismail (A.S) and Prophet Ishaq (A.S)?",
            options: ["Prophet Ismail (A.S) was father of Prophet Ishaq (A.S)", "Prophet Ishaq (A.S) was father of Prophet Ismail (A.S)", "Brothers", "Cousins"],
            answer: "Brothers"
        },
        {
            question: "Prophet Muhammad (PBUH) lived in Madina for __________ years.",
            options: ["8", "9", "10", "11"],
            answer: "10"
        },
        {
            question: "Al-Hudaibiyah Treaty was scribed by __________.",
            options: ["Abu Bakr Siddique (R.A)", "Umar Farooq (R.A)", "Usman Ghani (R.A)", "Ali Al-Murtaza (R.A)"],
            answer: "Usman Ghani (R.A)"
        },
        {
            question: "The Angel who delivered messages to Prophet Muhammad (PBUH) from Allah was?",
            options: ["Jibrael (A.S)", "Mikael (A.S)", "Israfeel (A.S)", "Izraeel (A.S)"],
            answer: "Jibrael (A.S)"
        },
        {
            question: "Hazrat Ali (R.A) was martyred in __________ Hijrah?",
            options: ["36", "38", "40", "42"],
            answer: "40"
        },
        {
            question: "Which country is called the “Land of Prophets”?",
            options: ["Saudi Arabia", "Syria", "Palestine", "Iraq"],
            answer: "Palestine"
        },
        {
            question: "Siha e Sitta are __________ books of Hadith?",
            options: ["5", "6", "7", "8"],
            answer: "6"
        },
        {
            question: "Eid Prayer is __________?",
            options: ["Wajib", "Farz", "Sunnat", "Mustahib"],
            answer: "Wajib"
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
