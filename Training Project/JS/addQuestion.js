// ==============================
// Question Paper Generator
// Add Question Logic
// ==============================
console.log("JavaScript Loaded");
const form = document.getElementById("questionForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const subject = document.getElementById("subject").value;
    const topic = document.getElementById("topic").value.trim();
    const difficulty = document.getElementById("difficulty").value;
    const marks = document.getElementById("marks").value;
    const question = document.getElementById("question").value.trim();

    const optionA = document.getElementById("optionA").value.trim();
    const optionB = document.getElementById("optionB").value.trim();
    const optionC = document.getElementById("optionC").value.trim();
    const optionD = document.getElementById("optionD").value.trim();

    const answer = document.getElementById("answer").value;

    // Validation

    if (
        topic === "" ||
        marks === "" ||
        question === "" ||
        optionA === "" ||
        optionB === "" ||
        optionC === "" ||
        optionD === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    // Question Object

    const questionData = {

        id: Date.now(),

        subject: subject,

        topic: topic,

        difficulty: difficulty,

        marks: Number(marks),

        question: question,

        options: [
            optionA,
            optionB,
            optionC,
            optionD
        ],

        answer: answer

    };

    // Local Storage

    let questions =
        JSON.parse(localStorage.getItem("questions")) || [];

    questions.push(questionData);

    localStorage.setItem(
        "questions",
        JSON.stringify(questions)
    );
    let activities = JSON.parse(
    localStorage.getItem("activities")
) || [];


activities.unshift({

    message: "New Question Added - " + subject.value,

    time: new Date().toLocaleString()

});


localStorage.setItem(
    "activities",
    JSON.stringify(activities)
);

    alert("Question Saved Successfully!");

    form.reset();

});addActivity(
"New Question Added"
);