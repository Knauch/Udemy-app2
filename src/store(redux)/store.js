import {
    compose,
    createStore,
    applyMiddleware,
} from 'redux';

import logger from 'redux-logger'

//1 big reducer
import { rootReducer } from './root-reducer';

//root-reducer - combination of all our reducers
//when we dispatch an action it will HIT the middleWares first
const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
    Boolean
  );
// function where we send all the middlewares through the applyMiddleware, and get several function under 1 variable composeEnhancers
//compose is a function that pass several functiones 
const composedEnhancers = compose(applyMiddleware(...middleWares));
//2nd argument is undefined(for testing) but we can put there any other default states
export const store = createStore(rootReducer, undefined, composedEnhancers);
