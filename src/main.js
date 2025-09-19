import { getImagesByQuery, showQueryError } from './js/pixabay-api';
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

  const inputValue = event.target.elements.search.value.trim();

  if (!inputValue) {
    return;
  }
  showLoader();
  clearGallery();

  getImagesByQuery(inputValue)
    .then(data => createGallery(data.hits))
    .catch(error => showQueryError())
    .finally(() => hideLoader());
}
