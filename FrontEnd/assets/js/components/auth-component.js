import { createElement } from '../models/htmlElement-model.js';
import { createCategories } from './filter-component.js';
export const deleteToken = () => {
	localStorage.removeItem('token');
	localStorage.removeItem('userId');
  location.reload();
};

export const editContent = (token) => {
	const header = document.querySelector('header');
	const editDiv = document.querySelector('.editing');
	const editBtn = document.querySelector('.editing.open-modal');
	const auth = document.getElementById('auth');
	const logout = createElement('span', 'logout', 'logout');

	if (!token) {
		createCategories();
		header.classList.remove('logged');
		editDiv.style.display = 'none';
		editBtn.style.display = 'none';
	} else {
		auth.removeChild(auth.lastElementChild);
		auth.appendChild(logout);
		header.classList.add('logged');
		editDiv.style.display = 'flex';
	}

	logout.addEventListener('click', () => {
		deleteToken();
	});
};
