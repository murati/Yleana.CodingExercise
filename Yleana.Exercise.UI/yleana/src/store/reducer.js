import * as actionTypes from './actions';

const intialState = {
    data: null,
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, num: state.num + 1 }
        case actionTypes.GetEmployees:
            return { ...state, data: action.data }
        case actionTypes.GetTitles:
            return { ...state, data: action.data }
        default:
            return state;
    }

}


export default reducer