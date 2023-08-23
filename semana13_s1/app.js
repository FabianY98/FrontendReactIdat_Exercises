const formContainer = document.getElementById('formContainer');
const namePerson = document.getElementById('namePerson');
const emailPerson = document.getElementById('emailPerson');
let jsonNamePerson = '';
let jsonEmailPerson = '';

formContainer.addEventListener('submit', (e) => {
	e.preventDefault();
	const infoToBackend = { jsonEmailPerson, jsonNamePerson };
	console.log(infoToBackend);
});

namePerson.addEventListener('change', (e) => {
	jsonNamePerson = e.target.value;
});

emailPerson.addEventListener('change', (e) => {
	jsonEmailPerson = e.target.value;
});
