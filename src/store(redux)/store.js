import {
    compose,
    createStore,
    applyMiddleware,
} from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga'

//1 big reducer
import { rootReducer } from './root-reducer';

// const loggerMiddleware = (store) => (next) => (action) => {
//   //if no action type just return next action
//   if(!action.type){
//       return next(action);
//   };

//   //getting curent status on stuff
//   console.log('type', action.type)
//   console.log('payload', action.payload)
//   console.log('curentState', store.getState())

//   //geting updating status on stuff, through running all reducers in store in order one by one because 'next'
//   next(action);
//   console.log('next state', store.getState())
// }

//used to save stuff like cart items stay even after rebooting the brouser page
const persistConfig = {
  key: 'root',
  storage, 
  whitelist: ['cart']
};

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer);

//root-reducer - combination of all our reducers
//when we dispatch an action it will HIT the middleWares first
const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  sagaMiddleware  
].filter(Boolean);
// function where we send all the middlewares through the applyMiddleware, and get several function under 1 variable composeEnhancers
//compose is a function that pass several functiones 

const composeEnhancer = (process.env.NODE_ENV !== 'production' && 
window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
//2nd argument is undefined(for testing) but we can put there any other default states
export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
