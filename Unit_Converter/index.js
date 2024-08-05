//1 meter= 3.28084 feet
//1 feet=0.3048 meter

//1 liter = 0.264172 gallon
//1 gallon=3.78541 litre

//1 kg =2.20462 pound
//1 pound=0.453592kg

const input = document.getElementById("input-el")
const convertbtn = document.getElementById("convert-btn")
const massEl = document.getElementById("mass-el")



convertbtn.addEventListener("click", function () {

    //console.log(inputVal)
    let result = kgPound(input.value)
    massEl.value = result;

})

function kgPound(num) {
    console.log("passed number" + num)
    let poundValue = num * 2.20462
    console.log("pound value" + poundValue);
    let kgValue = num * 0.453592
    console.log("kg value" + kgValue);
    return `${num} kilos = ${poundValue} pounds | ${num} pounds = ${kgValue} kilos`

}

function metreFeet() {

}

function litreGallon() {

}