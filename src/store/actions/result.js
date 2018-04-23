import * as actionTypes from "./actionsTypes";

export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    }
};


export const storeResult = (res) => {
    //use getState if needed
    return (dispatch, getState) => {
        setTimeout( () => {
            // const oldCounter = getState.counter;
            //console.log(oldCounter);
            dispatch(saveResult(res));
        }, 2000);
    }
};

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: id
    }
};