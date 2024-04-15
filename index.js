const form = document.getElementById('submitButton')

let grossIncome = 0, tax = 0

form.addEventListener("click", (e) => {
    console.log("clicked")
    e.preventDefault();
    const annualIncome = document.getElementById('annualIncome').value
    const extraIncome = document.getElementById('extraIncome').value
    const age = document.getElementById('age').value
    const deductableIncome = document.getElementById('deductableIncome').value
    grossIncome = Number(annualIncome) + Number(extraIncome) - Number(deductableIncome)

    console.log(annualIncome)
    console.log(extraIncome)
    console.log(deductableIncome)
    console.log(age)

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
    console.log(tax)
    grossIncome -= tax

    document.getElementById('result').innerHTML = grossIncome

})

document.addEventListener("DOMContentLoaded", function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (element) {
        return new bootstrap.Tooltip(element);
    });
});

// const myModal = document.getElementById('exampleModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//     myInput.focus()
// })

