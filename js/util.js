const getRandom = (min, max) => {
  if (min < 0 || max < 0 || min >= max) {
    return -1;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


const checkCommentLength = (comment, maxLength) => comment.length <= maxLength;


const getRandomArrayElement = (elements) => elements[getRandom(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';


const ALERT_SHOW_TIME = 5000;
const showAlert = (message) => {
    const alert=document.createElement('div');
    alert.style.position='absolute';
    alert.style.zIndex='100';
    alert.style.left='0';
    alert.style.top='0';
    alert.style.right='0';
    alert.style.padding='10px 3px';
    alert.style.fontSize='30px';
    alert.style.textAlign='center';
    alert.style.backgroundColor='red';

    alert.textContent=message;

    document.body.append(alert);

    setTimeout(()=>{
      alert.remove();
    }, ALERT_SHOW_TIME);
  };

}

export {getRandom, getRandomArrayElement,checkCommentLength, isEscapeKey, showAlert};
