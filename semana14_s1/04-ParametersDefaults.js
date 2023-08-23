// ES5
function sumNumeros(a, b) {
	// b = b === undefined ? 0 : b;
	if (b === undefined) {
		b = 0;
	} else b = b;
	return a + b;
}

// ES6
const sumNum = (a, b = 0) => a + b;

// REACT

// console.log(sumNumeros(5));
console.log(sumNum(10));
