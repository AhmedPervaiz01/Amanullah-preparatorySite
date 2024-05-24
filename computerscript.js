document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "The term ‘Computer’ is derived from__________?",
            options: ["Latin", "German", "French", "Arabic"],
            answer: "Latin"
        },
        {
            question: "Who is the father of Computer?",
            options: ["Allen Turing", "Charles Babbage", "Simur Cray", "Augusta Adaming"],
            answer: "Charles Babbage"
        },
        {
            question: "The basic operations performed by a computer are__________?",
            options: ["Arithmetic operation", "Logical operation", "Storage and relative", "All the above"],
            answer: "All the above"
        },
        {
            question: "Who is the father of Internet?",
            options: ["Chares Babbage", "Vint Cerf", "Denis Riche", "Martin Cooper"],
            answer: "Vint Cerf"
        },
        {
            question: "If a computer has more than one processor then it is known as__________?",
            options: ["Uni-process", "Multiprocessor", "Multi-threaded", "Multi-programming"],
            answer: "Multiprocessor"
        },
        {
            question: "WWW stands for___________?",
            options: ["World Whole Web", "Wide World Web", "Web World Wide", "World Wide Web"],
            answer: "World Wide Web"
        },
        {
            question: "A collection of system programs that controls and co-ordinates the overall operations of a computer system is called____________?",
            options: ["System software", "Operating system", "Utility program", "Device driver"],
            answer: "Operating system"
        },
        {
            question: "What type of operating system MS-DOS is?",
            options: ["Command Line Interface", "Graphical User Interface", "Multitasking", "Menu Driven Interface"],
            answer: "Command Line Interface"
        },
        {
            question: "Which technology is used in compact disks?",
            options: ["Mechanical", "Electrical", "Electro Magnetic", "Laser"],
            answer: "Laser"
        },
        {
            question: "1 Gigabyte is equal to ____________?",
            options: ["1024 bits", "1032 megabytes", "1024 kilobytes", "1024 megabytes"],
            answer: "1024 megabytes"
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
