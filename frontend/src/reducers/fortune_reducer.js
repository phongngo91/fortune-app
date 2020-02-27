import { RECEIVE_FORTUNES, RECEIVE_USER_FORTUNES, RECEIVE_FORTUNE } from '../actions/fortune_actions';
import { RECEIVE_SINGLE_CALCULATION } from '../actions/calculation_actions';

const FortuneReducer = (state = { all: {}, user: {} }, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_FORTUNES:
      // debugger
      let AllFortunes = {};
      action.fortunes.data.forEach(fortune => {
        AllFortunes[fortune._id] = fortune
      })
      newState.all = AllFortunes;
      return newState;
    case RECEIVE_FORTUNE:
      // debugger
      newState.all = action.fortune.data;
      return newState;
    case RECEIVE_USER_FORTUNES:
      // debugger
      newState.user = action.fortunes.data;
      return newState;
    case RECEIVE_SINGLE_CALCULATION:
      return newState.all = action.calculation;
    default:
      return state;
    
  }
}

export default FortuneReducer;