import { createElement } from '../models/htmlElement-model.js';
import { previewImage, sendForm } from '../models/form-model.js';
import { handleModal } from '../script.js';
import { closeModal } from './modal-component.js';

export const createFormModal = () => {
	const modal = document.querySelector('.modal');
	const h2 = createElement('h2', null, 'Ajouter une photo');
	const closeButton = createElement('span', 'close-modal', null, '&#215;');
	const goBackButton = createElement('span', 'go-back', null, '&#8592;');
	const form = createElement('form', 'modal-form');
	const formContainer = createElement('div', 'form-container');
	const uploadFileContainer = createElement('div', 'upload-file-container');
	const fileLabel = createElement('label', 'upload-file', '', '', { for: 'file'});
	const fileImg = createElement('img', null, null, null, { src: './assets/icons/image-icon.svg', alt: 'upload'});
	const fileText = createElement('p', null, '+ Ajouter photo');
	const fileSpan = createElement('span', null, 'jpg, png : 4mo max');
	const fileInput = createElement('input', null, null, null, { type: 'file', name: 'file', id: 'file', required: true, accept: 'image/jpg, image/png'});
	const inputContainer = createElement('div', 'input-container');
	const titleContainer = createElement('div', 'title-container');
	const titleLabel = createElement('label', null, 'Titre');
	const titleInput = createElement('input', null, null, null, { type: 'text', name: 'title', id: 'title', required: true});
	const categoryContainer = createElement('div', 'category-container');
	const categoryLabel = createElement('label', null, 'Categorie');
	const categorySelect = createElement('select', null, null, null, { name: 'category', id: 'category'});
	const option0 = createElement('option', null, '', null, { value: null, disabled: true, selected: true});
	const option1 = createElement('option', null, 'Objet', null, {value: '1'});
	const option2 = createElement('option', null, 'Appartement', null, { value: '2'});
	const option3 = createElement('option', null, 'Hotels & restaurants', null, { value: '3' });
	const submitButton = createElement('button', null, 'Valider', null, { type: 'submit', disabled: true});

	modal.innerHTML = '';
	modal.appendChild(h2);
	modal.appendChild(closeButton);
	modal.appendChild(goBackButton);
	modal.appendChild(form);
  
	form.appendChild(formContainer);
	formContainer.appendChild(uploadFileContainer);
	uploadFileContainer.appendChild(fileLabel);
	fileLabel.appendChild(fileImg);
	fileLabel.appendChild(fileText);
	fileLabel.appendChild(fileSpan);
	uploadFileContainer.appendChild(fileInput);
	formContainer.appendChild(inputContainer);
	inputContainer.appendChild(titleContainer);
	titleContainer.appendChild(titleLabel);
	titleContainer.appendChild(titleInput);
	inputContainer.appendChild(categoryContainer);
	categoryContainer.appendChild(categoryLabel);
	categoryContainer.appendChild(categorySelect);
	categorySelect.appendChild(option0);
	categorySelect.appendChild(option1);
	categorySelect.appendChild(option2);
	categorySelect.appendChild(option3);
	form.appendChild(submitButton);

	form.addEventListener('submit', (event) => {
		event.preventDefault();
		sendForm();
	});

	previewImage(fileInput);
	goBack(goBackButton);
	closeModal(closeButton);

	form.addEventListener('input', () => {
		if (isEmpty()) {
			submitButton.disabled = false;
		} else {
			submitButton.disabled = true;
		}
	});

	return modal;
};

export const goBack = (button) => {
	button.addEventListener('click', () => {
		const modal = document.querySelector('.modal-container');

		modal.remove();
		handleModal();
	});
};

const isEmpty = () => {
	const titleInput = document.getElementById('title');
	const categoryInput = document.getElementById('category');
	const fileInput = document.getElementById('file');
	
	if (titleInput.value && categoryInput.value !== 'null' && fileInput.files[0]) {
		console.log(fileInput)
		return true;
	} else {
		return false;
	}
};
