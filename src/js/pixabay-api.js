import axios from 'axios';
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
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }

      return response.data;
    });
}
