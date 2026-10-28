// =====================================
// Generate Paper
// =====================================

let questions = JSON.parse(localStorage.getItem("questions")) || [];

const examName = document.getElementById("examName");
const subject = document.getElementById("subject");
const difficulty = document.getElementById("difficulty");
const totalQuestions = document.getElementById("totalQuestions");
const marksPerQuestion = document.getElementById("marksPerQuestion");
const duration = document.getElementById("duration");
const examDate = document.getElementById("examDate");

const generateBtn = document.getElementById("generateBtn");
const previewQuestions = document.getElementById("previewQuestions");

generateBtn.addEventListener("click", generatePaper);

function generatePaper() {

    previewQuestions.innerHTML = "";

    if (
        subject.value === "" ||
        difficulty.value === "" ||
        totalQuestions.value === ""
    ) {

        alert("Please fill all required fields.");

        return;
    }

    let filteredQuestions = questions.filter((q) => {

        return (
            q.subject === subject.value &&
            q.difficulty === difficulty.value
        );

    });

    if (filteredQuestions.length === 0) {

        previewQuestions.innerHTML = `

            <h3>No Questions Found</h3>

        `;

        return;

    }

    let limit = Number(totalQuestions.value);

    filteredQuestions = filteredQuestions.slice(0, limit);

    showPreview(filteredQuestions);

}
// =====================================
// Show Preview
// =====================================

function showPreview(questionList) {

    previewQuestions.innerHTML = "";

    questionList.forEach((q, index) => {

        previewQuestions.innerHTML += `

            <div class="preview-question">

                <h3>Question ${index + 1}</h3>

                <p><strong>Subject :</strong> ${q.subject}</p>

                <p><strong>Topic :</strong> ${q.topic}</p>

                <p><strong>Difficulty :</strong> ${q.difficulty}</p>

                <p><strong>Marks :</strong> ${q.marks}</p>

                <hr>

                <p><strong>${q.question}</strong></p>

                <ul>

                    <li>A. ${q.options[0]}</li>
                    <li>B. ${q.options[1]}</li>
                    <li>C. ${q.options[2]}</li>
                    <li>D. ${q.options[3]}</li>

                </ul>

                <p>

                    <strong>Answer :</strong>

                    ${q.answer}

                </p>

            </div>

        `;

    });

    // Save Generated Paper

    const generatedPaper = {

        examName: examName.value,

        subject: subject.value,

        difficulty: difficulty.value,

        totalQuestions: totalQuestions.value,

        marksPerQuestion: marksPerQuestion.value,

        duration: duration.value,

        examDate: examDate.value,

        questions: questionList

    };

    localStorage.setItem(
        "generatedPaper",
        JSON.stringify(generatedPaper)
    );
    let activities = JSON.parse(
    localStorage.getItem("activities")
) || [];


activities.unshift({

    message: "Question Paper Generated - " + subject.value,

    time: new Date().toLocaleString()

});


localStorage.setItem(
    "activities",
    JSON.stringify(activities)
);

}
addActivity(
"Question Paper Generated - " + subject.value
);