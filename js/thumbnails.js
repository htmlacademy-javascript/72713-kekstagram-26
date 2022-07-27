const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderNewPictures = (newPictures) => {
  const newPicturesFragment = document.createDocumentFragment();

  newPictures.forEach(({url, likes, comments}) => {
    const picturesElement = pictureTemplate.cloneNode(true);
    picturesElement.querySelector('img').src = url;
    picturesElement.querySelector('.picture__likes').textContent = likes;
    picturesElement.querySelector('.picture__comments').textContent = comments;
    newPicturesFragment.appendChild(picturesElement);
  });
  picturesContainer.appendChild(newPicturesFragment);
};

export {renderNewPictures};
