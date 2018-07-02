import {initialState} from '../State';

export const choiceReducer = (state = initialState, action) => {

  console.log('Got Action ' + action.type, action);

  switch (action.type) {
    case 'SELECT_CHOICE':
      state.quizzes[state.active].selected = action.payload;
      return {...state, quizzes: state.quizzes};
    case 'ACTIVE':
      return {...state, active: action.payload};
    default:
      return state;
  }
};