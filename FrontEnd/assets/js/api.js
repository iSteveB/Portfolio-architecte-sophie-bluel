export const getData = async () => {
	try {
		const response = await fetch('http://localhost:5678/api/works');
		const data = await response.json();
		console.log(data)
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const getCategories = async () => {
	try {
		const response = await fetch('http://localhost:5678/api/categories');
		const cateogries = await response.json();
    console.log(cateogries)
		return cateogries;
	} catch (error) {
		console.error(error);
	}
};