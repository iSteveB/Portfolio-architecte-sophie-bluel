import { checkUser } from '../utils/checkUser.js';
import { createWork } from '../services/work-service.js';

export const previewImage = (input) => {
	input.addEventListener('change', (event) => {
		const file = event.target.files[0];
		const reader = new FileReader();
		reader.onload = function (event) {
			const img = document.querySelector('.upload-file img');
			img.src = event.target.result;
		};
		reader.readAsDataURL(file);
	});
};

export const sendForm = () => {
		const token = checkUser();

		const file = document.getElementById('file').files[0];
    console.log(file);
		const title = document.getElementById('title').value;
    console.log(title)
		const category = document.getElementById('category').value;
    console.log(category)

		const formData = new FormData();
		formData.append('image', file);
		formData.append('category', category);
		formData.append('title', title);

		console.log(formData);
		createWork(formData, token);

};
