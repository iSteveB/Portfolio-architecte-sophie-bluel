import { checkUser } from '../utils/checkUser.js';
import { createWork } from '../services/work-service.js';
import { createElement } from './htmlElement-model.js';

export const previewImage = (input) => {
	input.addEventListener('change', (event) => {
		const file = event.target.files[0];
		const reader = new FileReader();
		reader.onload = function (event) {
			const label = document.querySelector('.upload-file');
			const previewContainer = createElement('div', 'preview-container');
			const previewImage = createElement('img', 'preview-image');
			
			previewImage.src = event.target.result;
			label.innerHTML = '';
			previewContainer.appendChild(previewImage);
			label.appendChild(previewContainer);
		};
		reader.readAsDataURL(file);
	});
};

export const sendForm = () => {
		const token = checkUser();

		const file = document.getElementById('file').files[0];
		const title = document.getElementById('title').value;
		const category = document.getElementById('category').value;

		const formData = new FormData();
		formData.append('image', file);
		formData.append('category', category);
		formData.append('title', title);

		createWork(formData, token);

};
