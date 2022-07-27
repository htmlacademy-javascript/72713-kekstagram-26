import './filtr.js';
import {setPhotoformSubmit, closeUploadForm} from './form_upload.js';
import {renderNewPictures} from './thumbnails.js';
import {getData} from './api.js';
import {showAlert} from './util.js';

getData((newPictures) => {
  renderNewPictures(newPictures);
},
() => {
  showAlert('Ошибка. Обновите страницу');
});

setPhotoformSubmit (closeUploadForm);
