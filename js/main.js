import {createNewPosts} from './data.js';
import {renderNewPictures} from './thumbnails.js';
import {scaleEditing} from './scale.js';
import './slider.js';


renderNewPictures(createNewPosts(25));
