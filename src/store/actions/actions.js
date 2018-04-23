/**
 * Created by usevil on 4/2/18.
 */
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

//using action creators rather than harcoded values above
//increment is function
export const increment = () => {
    return {
        type: INCREMENT
    }
};

export const decrement = () => {
    return {
        type: DECREMENT
    }
};

export const add = (value) => {
    return {
        type: ADD,
        val: value
    }
};

export const substract = (value) => {
    return {
        type: SUBTRACT,
        val: value
    }
};

//////////

export const storeResult = (result) => {
    return {
        type: STORE_RESULT,
        result: result
    }
};

export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        resultElId: id
    }
};


