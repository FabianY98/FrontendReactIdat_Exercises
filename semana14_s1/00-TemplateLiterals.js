const name = 'Diego';
const lastName = 'Cueva';

// ES5
console.log(name + ' ' + lastName + ' ' + 'es frontendDeveloper');

// ES6
console.log(`${name} ${lastName} es frontendDeveloper`);

// REACT
function Box({ className }) {
	return <div className={`box ${className}`} />;
}
