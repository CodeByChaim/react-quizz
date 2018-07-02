import {createStore} from 'redux';
import {choiceReducer} from './reducers/ChoiceReducer';

const store = createStore(choiceReducer);

// for dev purpose only
window.store = store;

export default store;