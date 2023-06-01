import SimpleLightbox from 'simplelightbox';
console.log(SimpleLightbox);
// Add imports above this line
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function createGalleryItem(items) {
  return items
    .map(
      item =>
        `<li class="gallery__item">
                <a class="gallery__link" href="${item.original}">
                    <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}">
                </a>
            </li>`
    )
    .join('');
}

const addGalleryItem = createGalleryItem(galleryItems);

gallery.innerHTML = addGalleryItem;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
