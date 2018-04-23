/**
 * Created by usevil on 4/2/18.
 */

import * as actionTypes from '../actions/actions';

const initialState = {
    results : []
}

const reducer = (state = initialState, action ) => {
    switch(action.type) {
        case actionTypes.STORE_RESULT :
            console.log('before update state ',state);
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
        case actionTypes.DELETE_RESULT :
            //const id = 2;
            //const updatedArray = [...state.results];
            //updatedArray.splice(id,1);
            //const updatedArray = state.results.filter(result => true) is return a new array. same with [...state]
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            }
    }

    return state;
};

export default reducer;