import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import counterReducer from './store/reducer/counter';
import resultReducer from './store/reducer/result';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

//middleware
const logger = store => {
     return next => {
         return action => {   //action is the action we dispatch
            console.log('[middleware dispathing]' , action);
            const result = next(action);
            console.log('[result ]' , result);
            console.log('[middleware nextstate]', store.getState());
            return result;
         }
     }
};

//pass the reducer, middleware(2nd argument)
const store = createStore(rootReducer , applyMiddleware(logger));

//provide needed  to pass store to components
ReactDOM.render(<Provider store = {store}><App /></Provider> , document.getElementById('root'));
registerServiceWorker();
