const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    const showResult = () => {
        let object = {
            name: usernameValue,
            email: emailValue,
            password: passwordValue
        }
        console.log(object);
    }
    showResult();

    if (usernameValue === "") {
        setErrorFor(username, "Имя пользователя не может быть пустым");
    } else {
        setSuccessFor(username);
        // username.style.border = "2px solid #f0f0f0";
    }

    if (emailValue === "") {
        setErrorFor(email, "Поле обязательно для заполнения!");
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, "Некорректный email");
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
		setErrorFor(password, "Поле обязательно для заполнения!");
    } else if (passwordValue.length <= 6) {
        setErrorFor(password, 'Пароль должен быть больше 6 символов!');
    } else {
		setSuccessFor(password);
	} 
	
	if (password2Value === '') {
		setErrorFor(password2, 'Поле обязательно для заполнения!');
	} else if (passwordValue !== password2Value) {
		setErrorFor(password2, 'Пароль не совпадает!');
	} else {
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function isEmail(email) {
    let regEx =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(email);
}