import { login } from './services/login-service.js';

const loginForm = document.querySelector('#login form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const email = emailInput.value;
  const password = passwordInput.value;
  
  login(email, password)
    .then(({token, userId}) => {
      if (!token || !userId) {
        alert("ERREUR : Impossible de se connecter");
      } else {
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        window.location.href = 'index.html';
      }
    })
    .catch((error) => {
      console.error(error);
    });
})