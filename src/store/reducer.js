// /**
// * Created by usevil on 3/30/18.
// */
//import * as actionTypes from './actions';
//
//const initialState = {
//    counter: 0,
//    results : []
//}
//
//const reducer = (state = initialState, action ) => {
//    switch(action.type) {
//        case actionTypes.INCREMENT :
//            return {
//            ...state,
//            counter: state.counter + 1
//            }
//            //const newState = Object.assign({} ,state);
//            //newState.counter = state.counter + 1;
//            //counter: state.counter + 1
//            //return newState;
//        case actionTypes.DECREMENT :
//            return {
//                ...state,
//                counter: state.counter - 1
//            }
//        case actionTypes.ADD :
//            return {
//                ...state,
//                counter: state.counter + action.val
//            }
//        case actionTypes.SUBTRACT :
//            return {
//                ...state,
//                counter: state.counter - action.payload.val
//            }
//        case actionTypes.STORE_RESULT :
//            console.log('before update state ',state);
//            return {
//                ...state,
//                results: state.results.concat({id: new Date(), value: state.counter})
//            }
//        case actionTypes.DELETE_RESULT :
//            //const id = 2;
//            //const updatedArray = [...state.results];
//            //updatedArray.splice(id,1);
//            //const updatedArray = state.results.filter(result => true) is return a new array. same with [...state]
//            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
//            return {
//                ...state,
//                results: updatedArray
//            }
//    }
//
//    return state;
//};
//
//export default reducer;