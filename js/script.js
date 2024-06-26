let $ = document
/// input
let usernameInput = $.querySelector('.username')
let passwordInput = $.querySelector('.password')
let RpasswoedInput = $.querySelector('.Rpassword')
let margin = $.querySelector('.email')
let stop = $.querySelector('.stop')
//// Bottom Error Input
let usernameMessage = $.querySelector('.username-validation')
let passwordMessage = $.querySelector('.password-validation')
let RpasswoedMassage = $.querySelector('.Rpassword-validation')
//// icone 
let icone = $.querySelector('#icone')
let iconeP = $.querySelector('#iconeP')
let iconeRP = $.querySelector('#iconeRP')
//// Start username KeyDown & Blur 
let form = $.querySelector('.form')
let CoUser = false;
let CoPass = false;
let CoRePass = false;
let btn = $.querySelector('.btn');
form.addEventListener("click", function (e) {
    e.preventDefault()
})
//// Start Password KeyDown & Blur 
passwordInput.addEventListener("click", function () {
    passwordInput.value = ""
})
passwordInput.addEventListener('keydown', function () {
    if (passwordInput.value.length) {

        passwordMessage.style.color = 'green'
        passwordMessage.style.display = 'block'
        passwordInput.style.border = 'none'
        passwordInput.style.borderBottom = '3px solid green'
        iconeP.style.color = 'green'
        CoPass = true
    } else {
        passwordMessage.style.color = 'red'
        passwordMessage.style.display = 'block'
        passwordInput.style.borderBottom = '3px solid red'
        CoPass = false

    }

})

passwordInput.addEventListener('blur', function () {
    if (passwordInput.value.length) {
        iconeP.style.color = 'green'
        // passwordInput.value = passwordInput.value + "$"
    } else {
        passwordMessage.style.color = 'red'
        iconeP.style.color = 'red'
        passwordInput.style.border = '2px solid red'

    }
})
//// End Password KeyDown & Blur 
usernameInput.addEventListener("click", function () {
    usernameInput.value = ""
})
usernameInput.addEventListener('keyup', function () {
    if (usernameInput.value.length) {
        if (usernameInput.value < 99 && usernameInput.value >= 1) {
            usernameMessage.style.color = 'green'
            usernameMessage.style.display = 'block'
            usernameInput.style.borderBottom = '3px solid green'
            icone.style.color = 'green'
            CoUser = false
        } else {
            usernameMessage.style.color = 'red'
            usernameMessage.style.display = 'block'
            usernameInput.style.border = 'none'
            usernameInput.style.borderBottom = '3px solid red'
            icone.style.color = 'red'
            CoUser = true
        }
    } else {
        usernameMessage.style.color = 'red'
        usernameMessage.style.display = 'block'
        usernameInput.style.borderBottom = '3px solid red'
        icone.style.color = 'red'
        CoUser = false
    }

})

usernameInput.addEventListener('blur', function () {
    if (usernameInput.value.length) {
        if (usernameInput.value < 99 && usernameInput.value >= 1) {
            usernameMessage.style.color = 'green'
            usernameMessage.style.display = 'block'
            usernameInput.style.border = 'none'
            usernameInput.style.borderBottom = '3px solid green';
            icone.style.color = 'green'
            CoUser = true
            // usernameInput.value = usernameInput.value + "%"
        } else {
            usernameMessage.style.color = 'red'
            usernameMessage.style.display = 'block'
            usernameInput.style.border = '2px solid red'
            icone.style.color = 'red'
            CoUser = false
        }
    } else {
        usernameMessage.style.color = 'red'
        icone.style.color = 'red'
        usernameInput.style.border = '2px solid red'
    }
})

//// End username KeyDown & Blur 

//// Start RePassword KeyUp
RpasswoedInput.addEventListener("click", function () {
    RpasswoedInput.value = ""
})
RpasswoedInput.addEventListener('keydown', function () {
    if (RpasswoedInput.value.length) {
        if (RpasswoedInput.value < 99 && RpasswoedInput.value >= 0) {
            RpasswoedMassage.style.color = 'green'
            RpasswoedMassage.style.display = 'block'
            RpasswoedInput.style.border = 'none'
            RpasswoedInput.style.borderBottom = '3px solid green'
            iconeRP.style.color = 'green'
            CoRePass = true
        } else {
            RpasswoedMassage.style.color = 'red'
            RpasswoedMassage.style.display = 'block'
            RpasswoedInput.style.border = 'none'
            RpasswoedInput.style.borderBottom = '3px solid red'
            iconeRP.style.color = 'red'
            CoRePass = false
        }
    } else {
        RpasswoedMassage.style.color = 'red'
        RpasswoedMassage.style.display = 'block'
        RpasswoedInput.style.border = 'none'
        RpasswoedInput.style.borderBottom = '3px solid red'
        iconeRP.style.color = 'red'
        CoRePass = false
    }

})

RpasswoedInput.addEventListener('blur', function () {
    if (RpasswoedInput.value.length) {
        if (RpasswoedInput.value < 99 && RpasswoedInput.value >= 0) {
            RpasswoedMassage.style.color = 'green'
            iconeRP.style.color = 'green'
            RpasswoedInput.style.border = 'none'
            RpasswoedInput.style.borderBottom = '2px solid green'
            // RpasswoedInput.value = RpasswoedInput.value + "%"
        } else {
            iconeRP.style.color = 'red'
            RpasswoedInput.style.border = '2px solid red'
        }
    } else {
        iconeRP.style.color = 'red'
        RpasswoedInput.style.border = '2px solid red'

    }
})

//// End RePassword Keyup
let stopV
btn.addEventListener('click', function () {
    if (usernameInput.value && RpasswoedInput.value && passwordInput.value) {
        stop.value = (passwordInput.value * usernameInput.value) / 100
        stopV = stop.value
        if ((stopV * 100) / RpasswoedInput.value < passwordInput.value) {
            margin.value = ((stopV * 100) / RpasswoedInput.value).toFixed(2) + " $"

        } else {
            margin.value = "Full Margin"
        }
    }

})