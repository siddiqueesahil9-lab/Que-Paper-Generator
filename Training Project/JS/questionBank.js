// ===============================
// Question Bank
// ===============================

let questions = JSON.parse(localStorage.getItem("questions")) || [];

const questionContainer = document.getElementById("questionContainer");

const searchInput = document.getElementById("searchInput");
const subjectFilter = document.getElementById("subjectFilter");
const difficultyFilter = document.getElementById("difficultyFilter");

const emptyState = document.getElementById("emptyState");

const totalQuestions = document.getElementById("totalQuestions");
const totalSubjects = document.getElementById("totalSubjects");
const totalEasy = document.getElementById("totalEasy");


// ===============================
// Display Questions
// ===============================

function displayQuestions(questionList = questions) {

    questionContainer.innerHTML = "";

    if (questionList.length === 0) {

        emptyState.style.display = "block";

        totalQuestions.innerText = 0;
        totalSubjects.innerText = 0;
        totalEasy.innerText = 0;

        return;
    }

    emptyState.style.display = "none";

    totalQuestions.innerText = questionList.length;

    const subjects = [...new Set(questionList.map(q => q.subject))];

    totalSubjects.innerText = subjects.length;

    const easyQuestions =
        questionList.filter(q => q.difficulty === "Easy");

    totalEasy.innerText = easyQuestions.length;

    questionList.forEach((q) => {

        questionContainer.innerHTML += `

        <div class="question-card">

            <h3>${q.subject}</h3>

            <p><strong>Topic :</strong> ${q.topic}</p>

            <p><strong>Difficulty :</strong> ${q.difficulty}</p>

            <p><strong>Marks :</strong> ${q.marks}</p>

            <hr>

            <p><strong>Question :</strong></p>

            <p>${q.question}</p>

            <div class="options">

                <p><strong>A.</strong> ${q.options[0]}</p>

                <p><strong>B.</strong> ${q.options[1]}</p>

                <p><strong>C.</strong> ${q.options[2]}</p>

                <p><strong>D.</strong> ${q.options[3]}</p>

            </div>

            <p>
                <strong>Correct Answer :</strong>
                ${q.answer}
            </p>

            <div class="btn-group">

                <button class="edit-btn">
                    Edit
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteQuestion(${q.id})">

                    Delete

                </button>

            </div>

        </div>

        `;

    });

}


// ===============================
// Delete Question
// ===============================

function deleteQuestion(id) {

    let confirmDelete =
        confirm("Do you want to delete this question?");

    if (!confirmDelete)
        return;

    questions = questions.filter(q => q.id !== id);

    localStorage.setItem(
        "questions",
        JSON.stringify(questions)
    );

    displayQuestions();

}


// ===============================
// Search + Filter
// ===============================

function searchQuestions() {

    let searchText =
        searchInput.value.toLowerCase();

    let subject =
        subjectFilter.value;

    let difficulty =
        difficultyFilter.value;

    let filteredQuestions =
        questions.filter((q) => {

            let matchSearch =
                q.question.toLowerCase().includes(searchText) ||
                q.topic.toLowerCase().includes(searchText);

            let matchSubject =
                subject === "All" ||
                q.subject === subject;

            let matchDifficulty =
                difficulty === "All" ||
                q.difficulty === difficulty;

            return (
                matchSearch &&
                matchSubject &&
                matchDifficulty
            );

        });

    displayQuestions(filteredQuestions);

}


// ===============================
// Events
// ===============================

searchInput.addEventListener(
    "keyup",
    searchQuestions
);

subjectFilter.addEventListener(
    "change",
    searchQuestions
);

difficultyFilter.addEventListener(
    "change",
    searchQuestions
);


// ===============================
// Initial Load
// ===============================

displayQuestions();