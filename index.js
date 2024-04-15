const form = document.getElementById('submitButton')

let grossIncome = 0, tax = 0

function isNumber(str) {
    var pattern = /^\d+\.?\d*$/;
    return pattern.test(str);
}

form.addEventListener("click", (e) => {
    e.preventDefault();

    const annualIncome = document.getElementById('annualIncome').value
    const extraIncome = document.getElementById('extraIncome').value
    const age = document.getElementById('age').value
    const deductableIncome = document.getElementById('deductableIncome').value
    grossIncome = Number(annualIncome) + Number(extraIncome) - Number(deductableIncome)

    if (grossIncome > 800000) {
        if (age == 1) {
            tax = 0.3 * grossIncome
        }
        else if (age == 2) {
            tax = 0.4 * grossIncome
        }
        else if (age == 3) {
            tax = 0.1 * grossIncome
        }
    }
    grossIncome -= tax

    if (isNumber(annualIncome) && isNumber(extraIncome) && age > 0 && isNumber(deductableIncome)) {

        var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
            keyboard: false
        })
        myModal.show()
    }
    else if (isNumber(extraIncome) && age > 0 && isNumber(deductableIncome)) {
        document.getElementById("annualIncome").classList.toggle("is-invalid")
    }
    else if (isNumber(annualIncome) && age > 0 && isNumber(deductableIncome)) {
        document.getElementById("extraIncome").classList.toggle("is-invalid")
    }
    else if (isNumber(annualIncome) && age > 0 && isNumber(extraIncome)) {
        document.getElementById("deductableIncome").classList.toggle("is-invalid")
    }
    else if (age == 0) {
        document.querySelector(".form-select").classList.toggle("is-invalid")
    }
    else {
        document.querySelectorAll(".form-control").forEach((i) => {
            i.classList.toggle("is-invalid")
        })
        document.querySelector(".form-select").classList.toggle("is-invalid")
    }

    document.getElementById('result').innerHTML = grossIncome
})

document.addEventListener("DOMContentLoaded", function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (element) {
        return new bootstrap.Tooltip(element);
    });
});

