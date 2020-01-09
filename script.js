// var saveBtn = document.getElementById("saveBtn")
// var startHour = document.getElementById("row1")
// var endHour = document.getElementById("row9")

// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();

// today = mm + '/' + dd + '/' + yyyy;
// document.write(today);

let date = document.getElementById("date");
let output = document.getElementById("date");

function date(){
    let today = new Date() + 1;
    let  month = today.getMonth();
    let year = today.getFullYear();
    let date = today.getDate();

    let currentDate = `$(month)/$(date)/$(year)`;
    output.innerText = currentDate;

}