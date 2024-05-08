export const createWorkModal = () => {
  const modal = document.querySelector('.modal');
  const form = createModalForm();
  modal.innerHTML = '';
  modal.appendChild(form);

  return form;
};

const createModalForm = () => {
  const form = document.createElement('form');
  form.classList.add('modal-form');
  form.appendChild(createFormContainer());
  form.appendChild(createSubmitButton('submit', 'Valider'));

  return form;
};

const createFormContainer = () => {
  const container = document.createElement('div');
  container.classList.add('form-container');
  container.appendChild(createUploadFileContainer());
  container.appendChild(createInputContainer());

  return container;
};

const createUploadFileContainer = () => {
  const container = document.createElement('div');
  container.classList.add('upload-file-container');
  container.appendChild(createUploadFileLabel());
  container.appendChild(createUploadFileInput());

  return container;
};

const createUploadFileLabel = () => {
  const label = document.createElement('label');
  label.htmlFor = 'file';
  label.classList.add('upload-file');
  label.appendChild(createUploadFileIcon());
  label.appendChild(createUploadFileText());
  label.appendChild(createUploadFileDescription());

  return label;
};

const createUploadFileIcon = () => {
  const icon = document.createElement('img');
  icon.src = './assets/icons/image-icon.svg';
  icon.alt = 'upload';

  return icon;
};

const createUploadFileText = () => {
  const text = document.createElement('p');
  text.textContent = '+ Ajouter photo';

  return text;
};

const createUploadFileDescription = () => {
  const description = document.createElement('span');
  description.textContent = 'jpg, png : 4mo max';

  return description;
};

const createUploadFileInput = () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.name = 'file';
  input.id = 'file';
  input.required = true;
  input.accept = 'image/jpg, image/png';
  input.style.display = 'none';

  return input;
};

const createInputContainer = () => {
  const container = document.createElement('div');
  container.classList.add('input-container');
  container.appendChild(createTitleContainer());
  container.appendChild(createCategoryContainer());

  return container;
};

const createTitleContainer = () => {
  const container = document.createElement('div');
  container.classList.add('title-container');
  container.appendChild(createTitleLabel());
  container.appendChild(createTitleInput());

  return container;
};

const createTitleLabel = () => {
  const label = document.createElement('label');
  label.htmlFor = 'title';
  label.textContent = 'Titre';

  return label;
};

const createTitleInput = () => {
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'title';
  input.id = 'title';
  input.required = true;

  return input;
};

const createCategoryContainer = () => {
  const container = document.createElement('div');
  container.classList.add('category-container');
  container.appendChild(createCategoryLabel());
  container.appendChild(createCategorySelect());

  return container;
};

const createCategoryLabel = () => {
  const label = document.createElement('label');
  label.htmlFor = 'category';
  label.textContent = 'Categorie';

  return label;
};

const createCategorySelect = () => {
  const select = document.createElement('select');
  select.name = 'category';
  select.id = 'category';
  createCategoryOptions(select);

  return select;
};

const createCategoryOptions = (select) => {
  const options = [
    { value: '1', text: 'Objet' },
    { value: '2', text: 'Appartement' },
    { value: '3', text: 'Hotels & restaurants' },
  ];

  options.forEach(option => {
    const optionElement = createCategoryOption(option.value, option.text);
    select.appendChild(optionElement);
  });
};

const createCategoryOption = (value, text) => {
  const option = document.createElement('option');
  option.value = value;
  option.textContent = text;

  return option;
};

const createSubmitButton = (type, value) => {
  const button = document.createElement('button');
  button.type = type;
  button.textContent = value;
  button.disabled = true;

  return button;
};

import { checkUser } from '../utils/checkUser.js';
import { createWork } from '../services/work-service.js';

const handleFormSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const title = formData.get('title');
  const category = formData.get('category');
  const file = formData.get('file');

  if (title && category && file) {
    const token = checkUser();
    createWork(title, category, file, token);
  }
}