const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleControlValue = document.querySelector('.scale__control--value');
const uploadPreviewImg = document.querySelector('.img-upload__preview img');

const STEP_VALUE_SCALE = 25;
const MIN_VALUE_SCALE = 25;
const MAX_VALUE_SCALE = 100;
const DIVISOR=100;

let currentValue;

const changeScale = () => {
  scaleControlValue.value = `${currentValue}%`;
  uploadPreviewImg.style.transform = `scale(${currentValue / DIVISOR})`;
};

const doSmaller = () => {
  if (currentValue > MIN_VALUE_SCALE) {
    currentValue -= STEP_VALUE_SCALE;
  }
  changeScale();
};

const doBigger = () => {
  if (currentValue < MAX_VALUE_SCALE) {
    currentValue += STEP_VALUE_SCALE;
  }
  changeScale();
};

const resetScale = () => {
  currentValue = MAX_VALUE_SCALE;
  changeScale ();
};

const scaleEditing = () => {
  currentValue = MAX_VALUE_SCALE;
  changeScale ();
  scaleSmaller.addEventListener('click', doSmaller);
  scaleBigger.addEventListener('click', doBigger);
};

export {resetScale, scaleEditing};

