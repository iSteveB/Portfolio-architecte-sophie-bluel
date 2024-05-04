export const login = (email, password) => {
	return new Promise((resolve, reject) => {
		fetch('http://localhost:5678/api/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password })
		})
		.then(response => response.json())
		.then(data => resolve(data))
		.catch(error => reject(console.error(error)));
	});
};


