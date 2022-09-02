import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import galleryTemplate from '../templates/gallery.hbs';
import { galleryItems } from './gallery-items';

const refs = {
  gallery: document.querySelector('.gallery'),
  galleryItem: document.querySelector('.gallery__item'),
  galleryImage: document.querySelector('.gallery__image'),
};

addMarkup(galleryItems);

function addMarkup(items) {
  refs.gallery.innerHTML = galleryTemplate(galleryItems);
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
