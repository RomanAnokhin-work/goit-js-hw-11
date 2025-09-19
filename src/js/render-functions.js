import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export function createGallery(images) {
  const markup = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
  <a class="gallery-link" href=${webformatURL}>
    <img
      class="gallery-image"
      src="${largeImageURL}"
      alt="${tags}"
      width="360"
      height="152"
    />
    <div class="gallery-info">
      <p class="gallery-stats">
        <span class="gallery-likes">Likes: ${likes}</span>
        <span class="gallery-views">Views: ${views}</span>
        <span class="gallery-comments">Comments: ${comments}</span>
        <span class="gallery-downloads">Downloads: ${downloads}</span>
      </p>
    </div>
  </a>
</li>`
    )
    .join('');

  gallery.innerHTML = markup;

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  lightbox.refresh();
}
export function clearGallery() {
  gallery.innerHTML = '';
}
export function showLoader() {
  loader.classList.remove('hidden');
}
export function hideLoader() {
  loader.classList.add('hidden');
}
