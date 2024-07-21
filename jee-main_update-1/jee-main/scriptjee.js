function showCourseDetails(courseId) {
    document.querySelectorAll('.course-details').forEach(detail => detail.style.display = 'none');
    document.getElementById(courseId).style.display = 'block';
}


function startQuiz(subject) {
    const quizData = {
        physics: {
            title: "Physics Quiz",
            questions: [
                { question: "What is the speed of light?", options: ["3x10^8 m/s", "5x10^6 m/s", "2x10^8 m/s"], correct: 0 },
                { question: "Who discovered gravity?", options: ["Newton", "Einstein", "Galileo"], correct: 0 },
                { question: "What is the formula for force?", options: ["F = ma", "E = mc^2", "V = IR"], correct: 0 },
                { question: "What is the unit of power?", options: ["Watt", "Newton", "Joule"], correct: 0 },
                { question: "What is the acceleration due to gravity?", options: ["9.8 m/s^2", "5.5 m/s^2", "12 m/s^2"], correct: 0 },
                { question: "What is the charge of an electron?", options: ["-1.6 x 10^-19 C", "1.6 x 10^-19 C", "0 C"], correct: 0 },
                { question: "What is the formula for kinetic energy?", options: ["1/2 mv^2", "mgh", "mc^2"], correct: 0 },
                { question: "Who proposed the theory of relativity?", options: ["Einstein", "Newton", "Bohr"], correct: 0 },
                { question: "What is the speed of sound?", options: ["343 m/s", "300 m/s", "400 m/s"], correct: 0 },
                { question: "What is the unit of frequency?", options: ["Hertz", "Pascal", "Watt"], correct: 0 }
            ]
        },
        chemistry: {
            title: "Chemistry Quiz",
            questions: [
                { question: "What is the atomic number of Hydrogen?", options: ["1", "2", "3"], correct: 0 },
                { question: "What is the chemical formula of water?", options: ["H2O", "CO2", "O2"], correct: 0 },
                { question: "Who is known as the father of modern chemistry?", options: ["Lavoisier", "Mendeleev", "Dalton"], correct: 0 },
                { question: "What is the pH of pure water?", options: ["7", "5", "9"], correct: 0 },
                { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Go"], correct: 0 },
                { question: "What is the valency of carbon?", options: ["4", "2", "6"], correct: 0 },
                { question: "What is the main gas in the Earth's atmosphere?", options: ["Nitrogen", "Oxygen", "Carbon Dioxide"], correct: 0 },
                { question: "What is the formula for methane?", options: ["CH4", "C2H6", "CO2"], correct: 0 },
                { question: "Who discovered the electron?", options: ["Thomson", "Rutherford", "Bohr"], correct: 0 },
                { question: "What is the boiling point of water?", options: ["100°C", "90°C", "110°C"], correct: 0 }
            ]
        },
        maths: {
            title: "Maths Quiz",
            questions: [
                { question: "What is 2+2?", options: ["3", "4", "5"], correct: 1 },
                { question: "What is the square root of 9?", options: ["2", "3", "4"], correct: 1 },
                { question: "What is the value of π?", options: ["3.14", "3.15", "3.13"], correct: 0 },
                { question: "What is the integral of x dx?", options: ["x^2/2", "x^3/3", "1/x"], correct: 0 },
                { question: "What is the derivative of sin(x)?", options: ["cos(x)", "-cos(x)", "sin(x)"], correct: 0 },
                { question: "What is the area of a circle?", options: ["πr^2", "2πr", "πd"], correct: 0 },
                { question: "What is the solution to the equation x^2 = 4?", options: ["2", "4", "1"], correct: 0 },
                { question: "What is the sum of the angles in a triangle?", options: ["180°", "90°", "360°"], correct: 0 },
                { question: "What is the value of e?", options: ["2.718", "3.142", "1.618"], correct: 0 },
                { question: "What is the value of log(1)?", options: ["0", "1", "-1"], correct: 0 }
            ]
        }
    };

    const quiz = quizData[subject];
    if (quiz) {
        document.querySelector('main').innerHTML = `
            <section class="section">
                <div class="container">
                    <h2>${quiz.title}</h2>
                    <div id="quiz-questions"></div>
                    <button class="submit-button" onclick="submitQuiz('${subject}')">Submit</button>
                    <div id="quiz-score" class="quiz-score"></div>
                </div>
            </section>
        `;

        const questionsContainer = document.getElementById('quiz-questions');
        quiz.questions.forEach((q, index) => {
            const questionElem = document.createElement('div');
            questionElem.className = 'quiz-question';
            questionElem.innerHTML = `<p>${q.question}</p>`;
            q.options.forEach((option, optIndex) => {
                questionElem.innerHTML += `<label><input type="radio" name="question${index}" value="${optIndex}"> ${option}</label><br>`;
            });
            questionsContainer.appendChild(questionElem);
        });
    }
}

function submitQuiz(subject) {
    const quizData = {
        physics: {
            title: "Physics Quiz",
            questions: [
                { question: "What is the speed of light?", options: ["3x10^8 m/s", "5x10^6 m/s", "2x10^8 m/s"], correct: 0 },
                { question: "Who discovered gravity?", options: ["Newton", "Einstein", "Galileo"], correct: 0 },
                { question: "What is the formula for force?", options: ["F = ma", "E = mc^2", "V = IR"], correct: 0 },
                { question: "What is the unit of power?", options: ["Watt", "Newton", "Joule"], correct: 0 },
                { question: "What is the acceleration due to gravity?", options: ["9.8 m/s^2", "5.5 m/s^2", "12 m/s^2"], correct: 0 },
                { question: "What is the charge of an electron?", options: ["-1.6 x 10^-19 C", "1.6 x 10^-19 C", "0 C"], correct: 0 },
                { question: "What is the formula for kinetic energy?", options: ["1/2 mv^2", "mgh", "mc^2"], correct: 0 },
                { question: "Who proposed the theory of relativity?", options: ["Einstein", "Newton", "Bohr"], correct: 0 },
                { question: "What is the speed of sound?", options: ["343 m/s", "300 m/s", "400 m/s"], correct: 0 },
                { question: "What is the unit of frequency?", options: ["Hertz", "Pascal", "Watt"], correct: 0 }
            ]
        },
        chemistry: {
            title: "Chemistry Quiz",
            questions: [
                { question: "What is the atomic number of Hydrogen?", options: ["1", "2", "3"], correct: 0 },
                { question: "What is the chemical formula of water?", options: ["H2O", "CO2", "O2"], correct: 0 },
                { question: "Who is known as the father of modern chemistry?", options: ["Lavoisier", "Mendeleev", "Dalton"], correct: 0 },
                { question: "What is the pH of pure water?", options: ["7", "5", "9"], correct: 0 },
                { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Go"], correct: 0 },
                { question: "What is the valency of carbon?", options: ["4", "2", "6"], correct: 0 },
                { question: "What is the main gas in the Earth's atmosphere?", options: ["Nitrogen", "Oxygen", "Carbon Dioxide"], correct: 0 },
                { question: "What is the formula for methane?", options: ["CH4", "C2H6", "CO2"], correct: 0 },
                { question: "Who discovered the electron?", options: ["Thomson", "Rutherford", "Bohr"], correct: 0 },
                { question: "What is the boiling point of water?", options: ["100°C", "90°C", "110°C"], correct: 0 }
            ]
        },
        maths: {
            title: "Maths Quiz",
            questions: [
                { question: "What is 2+2?", options: ["3", "4", "5"], correct: 1 },
                { question: "What is the square root of 9?", options: ["2", "3", "4"], correct: 1 },
                { question: "What is the value of π?", options: ["3.14", "3.15", "3.13"], correct: 0 },
                { question: "What is the integral of x dx?", options: ["x^2/2", "x^3/3", "1/x"], correct: 0 },
                { question: "What is the derivative of sin(x)?", options: ["cos(x)", "-cos(x)", "sin(x)"], correct: 0 },
                { question: "What is the area of a circle?", options: ["πr^2", "2πr", "πd"], correct: 0 },
                { question: "What is the solution to the equation x^2 = 4?", options: ["2", "4", "1"], correct: 0 },
                { question: "What is the sum of the angles in a triangle?", options: ["180°", "90°", "360°"], correct: 0 },
                { question: "What is the value of e?", options: ["2.718", "3.142", "1.618"], correct: 0 },
                { question: "What is the value of log(1)?", options: ["0", "1", "-1"], correct: 0 }
            ]
        }
    };

    const quiz = quizData[subject];
    if (quiz) {
        let score = 0;
        quiz.questions.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            if (selectedOption && parseInt(selectedOption.value) === q.correct) {
                score += 1;
            }
        });
        const totalQuestions = quiz.questions.length;
        const scoreElem = document.getElementById('quiz-score');
        const percentage = (score / totalQuestions) * 100;
        let icon = '';
        if (percentage === 100) {
            icon = '<i class="fa fa-star" style="color: gold;"></i>';
        } else if (percentage >= 70) {
            icon = '<i class="fa fa-smile" style="color: green;"></i>';
        } else if (percentage >= 50) {
            icon = '<i class="fa fa-meh" style="color: orange;"></i>';
        } else {
            icon = '<i class="fa fa-frown" style="color: red;"></i>';
        }
        scoreElem.innerHTML = `${icon} You scored ${score} out of ${totalQuestions}`;

        // Redirect back to main screen and display score
        setTimeout(() => {
            document.querySelector('main').innerHTML = `
                <section class="section">
                    <div class="container">
                        <h2>Main Screen</h2>
                        <div id="quiz-result" class="quiz-result"></div>
                        <!-- Include your main screen content here -->
                    </div>
                </section>
            `;
            
            document.getElementById('quiz-result').innerHTML = `${icon} You scored ${score} out of ${totalQuestions}`;
        }, 2000); // 2-second delay before redirecting
    }
}
