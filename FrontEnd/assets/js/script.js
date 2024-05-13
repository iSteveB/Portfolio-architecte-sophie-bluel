import { getData } from '../js/services/work-service.js';
import { displayGallery } from './components/gallery-component.js';
import { filterGalleryByCategory, handleFilterClass } from './components/filter-component.js';
import { checkUser } from './utils/checkUser.js';
import { editContent } from './components/auth-component.js';
import { handleModal } from './components/modal-component.js';

const token = checkUser();
editContent(token);

const data = await getData();
displayGallery(data);

const filterButtons = document.querySelectorAll('.filter li');

filterButtons.forEach((button) => {
	button.addEventListener('click', (event) => handleFilterClick(event));
});

export const handleFilterClick = async (event) => {
	const buttonId = event.target.id;
	if (buttonId === '0') {
		displayGallery(data);
		handleFilterClass(event);
	} else {
		filterGalleryByCategory(data, Number(buttonId));
		handleFilterClass(event);
	}
};

document.querySelector('.open-modal').addEventListener('click',() => handleModal(data));
