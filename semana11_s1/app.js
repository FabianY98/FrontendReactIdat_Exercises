const arrPersons = [
	{ id: 1, name: 'Diego', age: 25 },
	{ id: 2, name: 'Jise', age: 40 },
];

// Obtener datos
const infoForm = {
	id: 3,
	name: 'Jesys',
	age: 20,
};

// Imperativo
// arrPersons.push(infoForm);
// console.log(arrPersons);

// Declarativa
const nuevoArreglo = [...arrPersons, infoForm];
console.log(nuevoArreglo);
