// ES5
function readFive() {
	return 5;
}

function sum(a, b) {
	return a + b;
}

// ES6
const readFiveES6 = () => 5;

const sumES6 = (a, b) => a + b;

// REACT
function PersonsList({ persons }) {
	return (
		<div>
			{persons.map((person) => (
				<li>{person.name}</li>
			))}
		</div>
	);
}
