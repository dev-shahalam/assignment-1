

calculate.addEventListener("click", function () {
    let num1 = document.querySelector("#inputOne").value;
    let num2 = document.querySelector("#inputTwo").value;
    let oparetor = document.querySelector("#operator").value;
    let calculate = document.querySelector("#calculate");
    let result = document.querySelector("#result");
    let warning = document.querySelector("#warning");



    if (isNaN(num1) || isNaN(num2) || num1 == "" || num2 == "") {
        warning.innerHTML = "Please enter a valid number"
        warning.style.display = "block";
        setTimeout(function () {
            warning.style.display = "none";
        }, 3000);
    }

    else if (oparetor === "+") {
        result.innerHTML = parseFloat(num1) + parseFloat(num2);
        result.style.display = "block";
    }
    else if (oparetor === "-") {
        result.innerHTML = parseFloat(num1) - parseFloat(num2);
        result.style.display = "block";
    }
    else if (oparetor === "*") {
        result.innerHTML = parseFloat(num1) * parseFloat(num2);
        result.style.display = "block";
    }
    else if (oparetor === "/") {
        result.innerHTML = parseFloat(num1) / parseFloat(num2);
        result.style.display = "block";
    }

});

