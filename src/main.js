import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', hendlerSubmit);

function hendlerSubmit(event) {
  event.preventDefault();

  const inputValue = event.target.elements.search.value.toLowerCase().trim();

  if (!inputValue) {
    return;
  }

  showLoader();
  clearGallery();

  getImagesByQuery(inputValue)
    .then(data => createGallery(data.hits))
    .catch(error => showQueryError(error.message))
    .finally(() => hideLoader());
}

function showQueryError(message) {
  iziToast.error({
    title: 'Error',
    titleColor: '#fff',
    iconColor: '#fff',
    backgroundColor: '#ef4040',
    messageColor: '#fff',
    iconUrl: './img/error-icon.svg',
    message:
      message ||
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
    timeout: 3000,
    close: true,
  });
}
