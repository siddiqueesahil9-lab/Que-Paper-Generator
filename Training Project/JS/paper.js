// =================================
// Generated Paper JS
// =================================


// Get Generated Paper Data

let paperData = JSON.parse(
    localStorage.getItem("generatedPaper")
);


// HTML Elements

const showExamName = document.getElementById("showExamName");

const showSubject = document.getElementById("showSubject");

const showDuration = document.getElementById("showDuration");

const showDate = document.getElementById("showDate");

const paperQuestions = document.getElementById("paperQuestions");



// Check Data

if(paperData == null){

    paperQuestions.innerHTML = `

        <h2>No Paper Generated</h2>

        <p>Please generate paper first.</p>

    `;

}

else{


    // Show Information

    showExamName.innerText = paperData.examName;

    showSubject.innerText = paperData.subject;

    showDuration.innerText = paperData.duration;

    showDate.innerText = paperData.examDate;



    // Show Questions


    paperData.questions.forEach((q,index)=>{


        paperQuestions.innerHTML += `

        <div class="paper-question">


            <h3>
                Question ${index+1}
            </h3>


            <p>
                <strong>
                ${q.question}
                </strong>
            </p>


            <ul>

                <li>
                    A. ${q.options[0]}
                </li>

                <li>
                    B. ${q.options[1]}
                </li>

                <li>
                    C. ${q.options[2]}
                </li>

                <li>
                    D. ${q.options[3]}
                </li>


            </ul>


            <p>

            <strong>
            Marks:
            </strong>

            ${q.marks}

            </p>


        </div>

        `;


    });


}



// Print Function

function printPaper(){

    window.print();

}



// Back Function

function goBack(){

    window.history.back();

}