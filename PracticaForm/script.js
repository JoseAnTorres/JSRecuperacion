const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	entradas();
});

function entradas() {
	const usuarioValor = usuario.value.trim();
	const emailValor = email.value.trim();
	const passwordValor = password.value.trim();
	const password2Valor = password2.value.trim();
	
	if(usuarioValor === '') {
		error(usuario, 'No hay usuario');
	}else if (!nombreCorrecto(usuarioValor)) {
		error(usuario, 'Tiene que ser en 3 y 15 caracteres');
	} else {
		correcto(usuario);
	}
	
	if(emailValor === '') {
		error(email, 'No hay email');
	} else if (!emailCorrecto(emailValor)) {
		error(email, 'Email invalido');
	} else {
		correcto(email);
	}
	
	if(passwordValor === '') {
		error(password, 'No hay contrasenya');
	}else if (!passCorrecto(passwordValor)) {
		error(password, 'Tiene que ser entre 6 y 25 caracteres');
	} else {
		correcto(password);
	}
	
	if(password2Valor === '') {
		error(password2, 'No hay contrasenya 2');
	} else if(passwordValor !== password2Valor) {
		error(password2, 'Las contrasenyas no coinciden');
	} else{
		correcto(password2);
	}
}

function error(input, mensaje) {
	const controlador = input.parentElement;
	const small = controlador.querySelector('small');
	controlador.className = 'form-control error';
	small.innerText = mensaje;
}

function correcto(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function nombreCorrecto(nombre) {
	return /^([A-Za-z]){3,15}$/.test(nombre);
}

function emailCorrecto(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function passCorrecto(pass) {
	return /^([[a-zA-Z0-9_-]){6,25}$/.test(pass);
}