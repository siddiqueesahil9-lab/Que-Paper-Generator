// ================================
// Dashboard Data
// ================================


// Question Bank Read

let questions = JSON.parse(
    localStorage.getItem("questions")
) || [];


// Generated Papers Read

let papers = JSON.parse(
    localStorage.getItem("papers")
) || [];



// ================================
// Dashboard Cards
// ================================


// Total Questions

document.getElementById("totalQuestion").innerText =
questions.length;



// Total Generated Papers

document.getElementById("generatedPaper").innerText =
papers.length;




// Total Subjects

let subjectSet = new Set();


questions.forEach(question => {

    subjectSet.add(question.subject);

});


document.getElementById("totalSubject").innerText =
subjectSet.size;




// ================================
// Recent Activity
// ================================


let activities = JSON.parse(
    localStorage.getItem("activities")
) || [];



let activityTable =
document.getElementById("activityTable");



if(activities.length === 0){


    activityTable.innerHTML = `

        <tr>

            <td>--</td>

            <td>No Activity Yet</td>

            <td>Pending</td>

        </tr>

    `;


}

else{


    activities.forEach(activity => {


        activityTable.innerHTML += `


        <tr>


            <td>
                ${activity.time}
            </td>



           <td>
    ${activity.text || activity.message}
           </td>



            <td>
                Completed
            </td>



        </tr>


        `;


    });


}