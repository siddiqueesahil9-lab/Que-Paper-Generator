// ===============================
// Activity Manager
// ===============================

function addActivity(message){

    let activities = JSON.parse(
        localStorage.getItem("activities")
    ) || [];


    let activity = {

        message: message,

        time: new Date().toLocaleString()

    };


    activities.unshift(activity);


    // Sirf last 5 activity rakhenge

    if(activities.length > 5){

        activities.pop();

    }


    localStorage.setItem(
        "activities",
        JSON.stringify(activities)
    );

}