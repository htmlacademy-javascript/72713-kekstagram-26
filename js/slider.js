const uploadForm = document.querySelector('.img-upload__form');
const effectList = uploadForm.querySelector('.effects__list');
const effectValue = uploadForm.querySelector('.effect-level__value');
const sliderElement = uploadForm.querySelector('.effect-level__slider');
const imgPreview = uploadForm.querySelector('.img-upload__preview img');

const EFFECTS = {
  chrome: {
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    units: '',
    filter: 'grayscale',
  },
  sepia: {
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    units: '',
    filter: 'sepia',
  },
  marvin: {
    options: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
    units: '%',
    filter: 'invert',
  },
  phobos: {
    options: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    units: 'px',
    filter: 'blur',
  },
  heat: {
    options: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    units: '',
    filter: 'brightness',
  },
};

let currentEffect = 'none';

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  }
});

const removeEffectsClass = () => imgPreview.classList.remove(`effects__preview--${currentEffect}`);
const resetEffects = () => {
  removeEffectsClass ();
  currentEffect = 'none';
  sliderElement.parentElement.classList.add('hidden');
  imgPreview.style.filter = '';
};

const renderEffect = () => {
  sliderElement.parentElement.classList.add('hidden');
  effectList.addEventListener('change', (evt) => {
    if (evt.target.value==='none') {
      resetEffects ();
    } else {
      sliderElement.parentElement.classList.remove('hidden');
      removeEffectsClass ();
      currentEffect = evt.target.value;
      imgPreview.classList.add(`effects__preview--${currentEffect}`);
      sliderElement.noUiSlider.updateOptions(EFFECTS[currentEffect].options);
      sliderElement.noUiSlider.on ('update', () => {
        effectValue.value = sliderElement.noUiSlider.get ();
        imgPreview.style.filter = `${EFFECTS[currentEffect].filter}(${effectValue.value}${EFFECTS[currentEffect].units})`;
      });
    }
  });
};
export {resetEffects, renderEffect};

