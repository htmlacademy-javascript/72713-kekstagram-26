import {isEscapeKey, checkCommentLength} from './util.js';
import {resetScale, scaleEditing} from './scale.js';
import {resetEffects, renderEffect} from './slider.js';
import {sendData} from './api.js';
import{showSuccessMessage, showErrMessage} from './message.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = document.querySelector('#upload-file');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const uploadCansel = uploadForm.querySelector('#upload-cancel');
const hashtagInput = uploadForm.querySelector('.text__hashtags');
const commentInput = uploadForm.querySelector('.text__description');
const submitButton = uploadForm.querySelector('.img-upload__submit');

const COMMENT_MAX_LENGTH = 140;
const MAX_HASHTAG_QUANTITY = 5;

const onFormEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadForm();
  }
};

const resetUploadImg = () => {
  resetEffects();
  resetScale();
};

function openUploadForm () {
  uploadOverlay.classList.remove('hidden');
  bodyElement.classList.add('.modal-open');
  scaleEditing();
  renderEffect();
  document.addEventListener('keydown', onFormEscKeydown);
}

function closeUploadForm () {
  uploadOverlay.classList.add('hidden');
  bodyElement.classList.remove('.modal-open');
  uploadForm.reset();
  resetUploadImg();
  document.removeEventListener('keydown', onFormEscKeydown);
}

uploadFile.addEventListener('change', ()=>{
  openUploadForm();
});

uploadCansel.addEventListener('click', ()=>{
  closeUploadForm();
});


const pristine = new Pristine (uploadForm, {
  classTo:'img-upload__field-wrapper',
  errorTextParrent: 'img-upload__field-wrapper',
});

pristine.addValidator(commentInput, (value) => checkCommentLength(value, COMMENT_MAX_LENGTH),
  `Комментарий не более ${COMMENT_MAX_LENGTH} символов`);


const endRegExp = /[^-_=+;:,.]$/m;
const RegExp = /^#[A-Za-zА-Яа-яЁё0-9]{0,}$/;
const HashtagLength = {
  MIN: 2,
  MAX: 20
};

const parseHashtagInput = (value) => value !== '' ? value.trim().toLowerCase().split(' ') : [];

pristine.addValidator(hashtagInput, (value) => parseHashtagInput(value).length <= MAX_HASHTAG_QUANTITY,
  `Не более ${MAX_HASHTAG_QUANTITY} хэштегов`);
pristine.addValidator(hashtagInput, (value) => value === '' || parseHashtagInput(value).every((hashtag) => endRegExp.test(hashtag)),
  'Хэштеги разделяются пробелами');
pristine.addValidator(hashtagInput, (value) => value === '' || parseHashtagInput(value).every((hashtag) => RegExp.test(hashtag)),
  'Хэштег начинается с # и состоит только из букв и цифр и не может содержать пробелы, спецсимволы (#, @, $ и т. п.)');
pristine.addValidator(hashtagInput, (value) => value === '' || parseHashtagInput(value).every((hashtag) => hashtag.length >= HashtagLength.MIN && hashtag.length <= HashtagLength.MAX),
  'Длина хэштега — от 1 до 19 символов не включая #');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};
const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const setPhotoformSubmit = () => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData (() => {
        closeUploadForm();
        unblockSubmitButton();
        showSuccessMessage();
      },
      () => {
        unblockSubmitButton();
        showErrMessage();
      },
      new FormData(evt.target),
      );
    }
  });
};
export {setPhotoformSubmit, closeUploadForm};
