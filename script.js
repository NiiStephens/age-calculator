let btn = document.getElementById("btn")
let birthday = document.getElementById("birthday")
const result = document.getElementById("result")

function calculateAge(){
    const birthdayValue = birthday.value;
    if (birthdayValue === "") {
        alert("Please enter your birthday")
    }
    else {
        let age = getAge(birthdayValue);
        result.innerText = `Your age is ${age} ${age > 1 ? 
            "years" : "year"} old`;
    }
}
function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date (birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear()
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() 
    < birthdayDate.getMonth())){
        age --
    }

    return age;
}
btn.addEventListener("click", calculateAge)