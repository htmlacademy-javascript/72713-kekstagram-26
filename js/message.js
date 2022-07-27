import {isEscapeKey} from './util.js';
const successMessage = document.querySelector('#success').content.querySelector('.success');
const successCloseButton = successMessage.querySelector('.success__button');
const errMessage = document.querySelector('#error').content.querySelector('.error');
const errCloseButton = errMessage.querySelector('.error__button');

const onSuccessMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessMessage();
  }
};

const onErrMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrMessage();
  }
};

const onWindowSuccessMessageClose = (evt) => {
  if (evt.target.className !== 'success__inner') {
    closeSuccessMessage();}
};

const onWindowErrMessageClose = (evt) => {
  if (evt.target.className !== 'success__inner') {
    closeErrMessage();}
};

function closeSuccessMessage () {
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onSuccessMessageEscKeydown);
  successMessage.removeEventListener('click', onWindowSuccessMessageClose);
  successMessage.remove();
}

function closeErrMessage () {
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onErrMessageEscKeydown);
  successMessage.removeEventListener('click', onWindowErrMessageClose);
  errMessage.remove();
}

const showSuccessMessage = () => {
  document.body.appendChild(successMessage);
  successCloseButton.addEventListener('click', () => {
    closeSuccessMessage();
  });
  document.addEventListener('keydown', onSuccessMessageEscKeydown);
  successMessage.addEventListener('click', onWindowSuccessMessageClose);
};

const showErrMessage = () => {
  document.body.appendChild(errMessage);
  errCloseButton.addEventListener('click', () => {
    closeErrMessage();
  });
  document.addEventListener('keydown', onErrMessageEscKeydown);
  successMessage.addEventListener('click', onWindowErrMessageClose);
};

export {showSuccessMessage, showErrMessage, closeSuccessMessage, closeErrMessage};
