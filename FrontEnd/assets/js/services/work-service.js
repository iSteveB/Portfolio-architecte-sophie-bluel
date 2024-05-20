import { checkUser } from '../utils/checkUser.js';

export const getData = async () => {
	try {
		const response = await fetch('http://localhost:5678/api/works');
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
};

export const createWork = async () => {
	const token = checkUser();

	const file = document.getElementById('file').files[0];
	const title = document.getElementById('title').value;
	const category = document.getElementById('category').value;

	const formData = new FormData();
	formData.append('image', file);
	formData.append('category', category);
	formData.append('title', title);

	try {
		const response = await fetch('http://localhost:5678/api/works', {
			method: 'POST',
			body: formData,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
};

export const deleteWork = async (id, token) => {
	try {
		const response = await fetch(`http://localhost:5678/api/works/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `bearer ${token}`,
			},
		});
		if (response.ok) return 'Work deleted !';
	} catch (error) {
		throw error;
	}
};
