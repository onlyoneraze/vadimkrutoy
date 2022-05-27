import { createStore } from 'redux';

const initialState= {
    likes: 10,
    dislikes: 5
}

const reducer = (state = initialState, action) => {
    console.log('reducer > ', action);
    return state;
}

const store = createStore(reducer);

export default store;