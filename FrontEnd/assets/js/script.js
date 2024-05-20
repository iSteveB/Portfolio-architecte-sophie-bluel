import { getData } from '../js/services/work-service.js';
import { displayGallery } from './components/gallery-component.js';
import { handleFilterClick } from './components/filter-component.js';
import { checkUser } from './utils/checkUser.js';
import { editContent } from './components/auth-component.js';
import { handleModal } from './components/modal-component.js';

let token, data, filterButtons;

token = checkUser();
editContent(token);

data = await getData();
displayGallery(data);

filterButtons = document.querySelectorAll('.filter li');
filterButtons.forEach((button) => {
	button.addEventListener('click', (event) => handleFilterClick(event, data));
});

document.querySelector('.open-modal').addEventListener('click',() => handleModal(token));
