// ES5
function infoPerson(person) {
	const x = person.name;
	const y = person.lastName;
	const z = person.age;

	return `Hola ${x} ${y} ${z}`;
}

// ES6

function personInfo(person) {
	const { name, lastName, age } = person;

	return `Hola ${name} ${lastName} ${age}`;
}

function personInfoWithES6({ name, lastName, age }) {
	return `Hola ${name} ${lastName} ${age}`;
}

// REACT
