import {showAlert} from './util.js';

const getData = async(onSuccess) => {
  try {
    const response = await fetch('https://26.javascript.pages.academy/kekstagram/data');
    if (!response.ok) {
      throw new Error('Не удалось загрузить изображение');
    } else {
      const data = await response.json();
      onSuccess(data);
    }
  } catch (err) {
    showAlert('Ошибка. Обновите страницу');
  }
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://26.javascript.pages.academy/kekstagram', {
    method: 'POST',
    body,
  })
    .then ((response) => {
      if(response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });

};

export {getData, sendData};

