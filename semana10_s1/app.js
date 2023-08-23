// THIS

const alumno = {
	name: 'Diego',
	lastName: 'Cueva',
	age: 31,
	fullName() {
		return `${this.name} - ${this.lastName}`;
	},
	seniority() {
		let experience;
		if (this.age > 30) {
			experience = 'Senior';
		} else {
			experience = 'Junior';
		}
		return experience;
	},
};

// console.log(alumno.fullName());

// console.log(alumno.seniority());

console.log(alumno);
