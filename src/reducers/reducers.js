import favouriteGifsReducer from './favouriteGifsReducer';
import searchPageReducer from './searchPageReducer';
import authReducer from './authReducer';
import modalReducer from './modalreducer';
import trendingPageReducer from './trendingPageReducer';
import savingGifReducer from './savingGifReducer';
import {combineReducers} from 'redux';

export default combineReducers({
    search:searchPageReducer,
    trending:trendingPageReducer,
    favourite:favouriteGifsReducer,
    auth:authReducer,
    modal:modalReducer,
    savingGif:savingGifReducer
});