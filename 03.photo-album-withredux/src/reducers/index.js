import { combineReducers } from 'redux';
import albums from './albums';
import photos from './photos';

const rootReducer = combineReducers({
  albums: albums,
  photos: photos,
});

export default rootReducer;