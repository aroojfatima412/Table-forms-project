
function calculatePercentage() {

    let obtained = Number(document.getElementById("obtained").value);
    let total = Number(document.getElementById("total").value);

    if (total <= 0 || obtained < 0 || obtained > total) {
        document.getElementById("result").innerHTML =""
            "Please enter valid marks!";
    }
    else {
        let percentage = (obtained / total) * 100;

        document.getElementById("result").innerHTML =""
            "Your Percentage is: " + percentage + "%";
    }

}



function totalmarks() {
    let subject = Number(document.getElementById("subject").value);
    let total = Number(document.getElementById("total").value);

    let result = subject / total;

    alert("Total Marks: " + result);
}

