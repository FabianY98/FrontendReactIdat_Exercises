// Como realizar peticiones (XmlHttpRequest(X) / Fetch / AXios)
// Como manejar la data (CallBacks(X) / Promesas / Async-Await)

const readDAta = () => {
	const data = fetch('https://jsonplaceholder.typicode.com/users');
	data.then((response) => response.json()).then((info) => console.log(info));
};

// readDAta();

const readDataWithAsync = async () => {
	const data = await fetch('https://jsonplaceholder.typicode.com/users');
	const response = await data.json();
	console.log(response);
};

readDataWithAsync();
