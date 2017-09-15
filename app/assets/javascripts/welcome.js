function validateHhMm(inputField) {
    var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(inputField.val());
    if (isValid) {
        inputField.css("background", "#bfa");
    } else {
        inputField.css("background", "#fba");
    }
}

$("#time_input").change(validateHhMm($("#time_input")));