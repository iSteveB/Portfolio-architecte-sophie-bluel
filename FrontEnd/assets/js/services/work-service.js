import { checkUser } from '../utils/checkUser.js';
export const getData = () => {
	return new Promise((resolve, reject) => {
		fetch('http://localhost:5678/api/works')
			.then((response) => response.json())
			.then((data) => resolve(data))
			.catch((error) => reject(error));
	});
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

	return new Promise((resolve, reject) => {
		fetch('http://localhost:5678/api/works', {
			method: 'POST',
			body: formData,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error('Failed to create work');
				}
			})
			.then((data) => resolve(data))
			.catch((error) => reject(error));
	});
};

export const deleteWork = (id, token) => {
	return new Promise((resolve, reject) => {
		fetch(`http://localhost:5678/api/works/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => {
				if (response.ok) return 'Work deleted !';
			})
			.catch((error) => reject(error));
	});
};
