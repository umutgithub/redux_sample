import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import counterReducer from './store/reducer/counter';
import resultReducer from './store/reducer/result';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});
//pass the reducer
const store = createStore(rootReducer);

//provide needed  to pass store to components
ReactDOM.render(<Provider store = {store}><App /></Provider> , document.getElementById('root'));
registerServiceWorker();
