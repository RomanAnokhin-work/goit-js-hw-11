import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const myApiKey = '52360469-04a0681cd82a25280493158e1';

export function getImagesByQuery(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: myApiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      if (response.data.hits.length === 0) {
        throw new Error();
        }
        
      return response.data;
    })

      .catch(error =>
          showQueryError());
}

 export function showQueryError() {
  iziToast.error({
    title: 'Error',
    titleColor: '#fff',
    iconColor: '#fff',
    backgroundColor: '#ef4040',
    messageColor: '#fff',
    iconUrl: './img/error-icon.svg',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
    timeout: 3000,
    close: true,
  });
}
