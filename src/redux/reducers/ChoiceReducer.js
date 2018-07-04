import {initialState} from '../State';

export const choiceReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SELECT_CHOICE':
      return {...state, selected: state.selected.concat(action.payload)};
    case 'ACTIVE':
      return {...state, active: action.payload};
    default:
      return state;
  }
};