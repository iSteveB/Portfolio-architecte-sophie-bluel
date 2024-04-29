export const fetchData = async () => {
	try {
		const response = await fetch('http://localhost:5678/api/works');
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};
