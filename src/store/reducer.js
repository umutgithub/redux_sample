 /**
 * Created by usevil on 3/30/18.
 */

const initialState = {
    counter: 0,
     results : []
}

const reducer = (state = initialState, action ) => {
    switch(action.type) {
        case 'INCREMENT' :
            return {
            ...state,
            counter: state.counter + 1
            }
            //const newState = Object.assign({} ,state);
            //newState.counter = state.counter + 1;
            //counter: state.counter + 1
            //return newState;
        case 'DECREMENT' :
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD' :
            return {
                ...state,
                counter: state.counter + action.val
            }
        case 'SUBTRACT' :
            return {
                ...state,
                counter: state.counter - action.payload.val
            }
        case 'STORE_RESULT' :
 console.log('before update state ',state);
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
    }

    return state;
};

export default reducer;