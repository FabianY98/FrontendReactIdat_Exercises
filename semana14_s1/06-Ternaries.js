// ES5
let message;
if (person.age >= 18) {
	message = 'Eres mayor';
} else {
	message = 'Eres menor';
}

// ES6
const message2 = person.age >= 18 ? 'Eres mayor' : 'Eres menor';

// REACT
function PersonList({ persons }) {
	return <>{persons.length ? <ul>Listaado de items</ul> : <p>No elementos</p>}</>;
}
