export const login = async (email, password) => {
	try {
		const response = await fetch('http://localhost:5678/api/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password })
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};



