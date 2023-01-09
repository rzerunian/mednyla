const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

var pwd = document.getElementById('password');
var result = document.getElementById('result');
var btn = document.getElementsByClassName('btn1');

// Form Validation

function checkStuff() {
  var user = document.getElementById('user');
  var password = pwd;
  var msg = document.getElementById('msg');
  
  if (user.value == "") {
    msg.style.display = 'block';
    msg.innerHTML = "Insira seu Nome de Usuário";
    user.focus();
    return false;
  } else if (password.value == "") {
    msg.style.display = 'block';
    msg.innerHTML = "Inisira sua senha";
    password.focus();
    return false;
  } else {
	console.log("ok")
  };
}