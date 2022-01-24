import Reactotron from 'Helpers/Reactotron';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import youtubeVideoReducers from './Reducers/youtubeReducers';

const newReducers = combineReducers({
  videoList: youtubeVideoReducers,
});

const myStore = __DEV__
  ? createStore(
      newReducers,
      {},
      compose(applyMiddleware(thunk), Reactotron.createEnhancer()),
    )
  : createStore(newReducers, {}, applyMiddleware(thunk));

export default myStore;
