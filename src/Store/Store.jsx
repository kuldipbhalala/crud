// store.js
import { createStore } from 'redux';
import rootReducer from '../Reducer/Reducer';

const store = createStore(rootReducer);
export default store;



export const EditITEM = (index, newValue) => ({
    type: "EDIT_ITEM",
    payload: { index, newValue }
  });



  