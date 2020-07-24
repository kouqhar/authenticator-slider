const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => 
container.classList.add('right-panel-active')
);

signInButton.addEventListener('click', () => 
container.classList.remove('right-panel-active')
);

document.getElementById('forgotForm').style.zIndex = "-1";
document.getElementById('forgotForm').style.display = "none";

function resetPassword(){
    document.getElementById('forgotForm').style.zIndex = "1";
    document.getElementById('forgotForm').style.display = "block";
    document.getElementById('signingIn').style.zIndex = "-1";
    document.getElementById('signingIn').style.display = "none";
}

function signInForm(){
    document.getElementById('signingIn').style.zIndex = "1";
    document.getElementById('signingIn').style.display = "block";
    document.getElementById('forgotForm').style.zIndex = "-1";
    document.getElementById('forgotForm').style.display = "none";
}