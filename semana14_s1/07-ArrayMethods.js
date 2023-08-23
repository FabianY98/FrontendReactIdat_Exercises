// find (X)
// some
// every
// includes
// map
// filter
// reduce

const dogs = [
	{ id: 'dog-1', name: 'Poodle', temperament: ['Inteligente', 'Ocioso'] },
	{ id: 'dog-2', name: 'Pequines', temperament: ['Tonto', 'Ocioso'] },
	{ id: 'dog-3', name: 'Pastor', temperament: ['Inteligente', 'Ocioso'] },
];

// Find(busca algo y devuelve lo primero que encuentra)

const findDog = dogs.find((dog) => dog.name === 'Pequines');

// console.log(findDog);
const findDog2 = dogs.some((dog) => dog.temperament.includes('Violento'));

// console.log(findDog2);

const findDog3 = dogs.every((dog) => dog.temperament.includes('Inteligente'));

const findDog4 = dogs.map((dog) => dog.name);

// console.log(findDog4);

const findDog5 = dogs.filter((dog) => dog.temperament.includes('Tonto'));

console.log(findDog5);

// REACT
function PersonsList({ persons }) {
	return (
		<>
			{persons
				.filter((person) => person.age >= 18)
				.map((person) => (
					<ul>{person.name}</ul>
				))}
		</>
	);
}
