import { createAction,  handleActions } from 'redux-actions'


export const LISTDATE = 'LIST_DATE';

//action
export const newList = createAction(LISTDATE,(payload) => payload);

export const actions = {
    newList
}

//reducers
export default handleActions ({
    [LISTDATE]:  (state, {payload}) => {
        return Object.assign({}, state);
    }
}, {});