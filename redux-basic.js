/**
 * Created by usevil on 3/29/18.
 */

const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter:0
}

//reducer takes  (current state, action)  buda state = initialState = state undefinedsa initial li al.
const rootReducer = (state = initialState, action) => {

    if(action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        };
    }


    if(action.type === 'ADD_COUNTER') {
        return {
    ...state,
            counter: state.value + 1
        };
    }

    //return uodated state
    return state;
}

//store
const store = createStore(rootReducer);
console.log(store.getState());

// subscription
store.subscribe(() => {
    console.log('Subsription' , store.getState());
});

// dispatched Action
//have to have type
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

// subscription
store.subscribe(() => {
   console.log('Subsription' , store.getState());
});