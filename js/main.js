// Js Website Konversi Suhu


function changeConversion(){
    let el_select_1 = document.querySelector(".convertion-title .title-unit-1")
    let el_select_2 = document.querySelector(".convertion-title .title-unit-2")
    let el_input = document.querySelector(".conversion-input .input-unit")
    let el_unit = document.querySelector(".conversion-unit")
    let el_text_unit_1 = document.querySelector(".text-unit-1")
    let el_text_unit_2 = document.querySelector(".text-unit-2")
    let el_formula_ctf = document.querySelector(".ctf")
    let el_formula_ftc = document.querySelector(".ftc")

    if (el_select_1.textContent == "C"){
        
        el_select_1.textContent = "F"
        el_select_2.textContent = "C,"
        
        el_text_unit_1.textContent = "F"
        el_text_unit_2.textContent = "C"

        el_formula_ctf.style.setProperty('display', 'none')
        el_formula_ftc.style.setProperty('display', 'inline')
        
        el_input.textContent = "Fahrenheit"
        el_unit.textContent = "Celcius"

    } else {
        
        el_select_1.textContent = "C"
        el_select_2.textContent = "F,"
        
        el_text_unit_1.textContent = "C"
        el_text_unit_2.textContent = "F"

        el_formula_ctf.style.setProperty('display', 'inline')
        el_formula_ftc.style.setProperty('display', 'none')
        
        el_input.textContent = "Celcius"
        el_unit.textContent = "Fahrenheit"
    }

    convertTemp()
}


function convertTemp() {

    const inputValue = document.getElementById("in-deg").value
    
    let el_id = document.getElementById("in-deg")
    let el_select = document.querySelector(".invalid-feedback")
    let is_invalid = isNaN (inputValue) ? true : false

    if (is_invalid) {
        el_id.classList.add("is-invalid")
        el_select.style.setProperty('display', 'block')

        let el_val = document.querySelector(".conversion-val")
        el_val.textContent = '--'

    } else {
        el_select.style.setProperty('display', 'none')
        el_id.classList.remove("is-invalid")
        
        let el_input = (document.querySelector(".convertion-title .title-unit-1").textContent == "C") ? true : false
        let val = isNaN (parseFloat (inputValue)) ? null : parseFloat (inputValue)
        let result = doConversion(val, el_input)

        let el_val = document.querySelector(".conversion-val")
        let el_unit = document.querySelector(".conversion-unit")

        el_val.textContent = result.val
        el_unit.textContent = result.unit
    }
}


function doConversion(v = null, CtF = true){
    let c, unit
    let r = {}

    if (v === null) {
        unit = CtF ? "Fahrenheit" : "Celcius"
        r = {val: '--', unit: unit}

        return r
    }

    if (CtF){
        c = 32 + (v * (9/5))
        r = {val: c.toFixed(1), unit:"Fahrenheit"}

    } else {
        c = (v - 32) * (5/9)
        r = {val: c.toFixed(1), unit:"Celcius"}
    }

    return r

}