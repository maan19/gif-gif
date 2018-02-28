import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import AppRouter from './AppRouter/Router';
import {createStore} from 'redux';
import reducers from './reducers/reducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import {firebase} from './firebase/firebase'
import {logIn,logOut} from './actions/auth';
import {clearFavouriteGifs,setFavouriteGifsThunk} from './actions/favouriteGifs';
import {history} from './AppRouter/Router';



const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
,applyMiddleware(thunk));
console.log(store.getState());
const jsx  = (
    <Provider store = {store}>
      <AppRouter/>
    </Provider>
);


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('login',user.email,user.uid);
      store.dispatch(logIn(user.uid));
      store.dispatch(setFavouriteGifsThunk(user.uid));
      history.push('/trending');
    } 
    else {
      console.log('signedout');
      store.dispatch(logOut());
      store.dispatch(clearFavouriteGifs());
      history.push('/trending');
    }
  });
             

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
