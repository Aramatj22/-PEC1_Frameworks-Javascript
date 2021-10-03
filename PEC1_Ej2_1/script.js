
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const edad= document.getElementById('edad');
const url= document.getElementById('url');


// Show imput error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show succes outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

///Check email is valid 

function checkEmail(input) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (re.test(input.value.trim())) {
        showSuccess(input);
        
    } else {
        showError(input, 'La dirección de email no es válida')
    }

    
}


//check required fields

function checkRequired(inputArr) {
    inputArr.forEach(function (input){
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
            
        } else {
            showSuccess(input)
        }
        
    });

    
}

// check password

function checkPassword(input1,input2) {
    if (input1.value !== input2.value) {

        showError(input2, "contraseña incorrecta" );
    } 
}


//Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} must be at less ${min} characters`
        );
        
    } else if(input.value.length > max) {
    showError(
        input,
        `${getFieldName(input)} must be less than ${max} characters`
    );
    } else {
        showSuccess(input);
        
    }
    
}

//get fielname

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
    
}

// Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username,email,password, password2,edad, url]);
    checkLength(username, 3,15);
    checkLength (password, 6,25);
    checkPassword(password,password2);
    checkAge(edad);
    checkUrl(url);
    
})


/// Age

function checkAge(input) {

    let edad = input.value*1;
    
        if (edad <=0 || edad >= 999) {
            showError(input, "edad incorrecta");
            
        } else {
            showSuccess(input)
        }   
}


///Url


function checkUrl(input) {
    const url = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/

    if (url.test(input.value.trim())) {
        showSuccess(input);
        
    } else {
        showError(input, 'La dirección de Url no es válida');
    }

    
}





/*// Event listeners


form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (username.value === '' ) {
        showError(username, 'Username is required')
        
    } else {
        showSuccess(username);
    }
    


if (email.value == '' ) {
    showError(email, 'Email is required');
    
} else if (!isValidEmail(email.value)) {
    showError(email, 'Email is not valid');
} else {
    showSuccess(email);

}

if (password.value === '' ) {
    showError(password, 'Password is required')
    
} else {
    showSuccess(password);
}

if (password2.value === '' ) {
    showError(password2, 'Password2 is required')
    
} else {
    showSuccess(password2);
}

if (edad.value === '' ) {
    showError(edad, 'edad is required')
    
} else {
    showSuccess(edad);
}



})
    */
