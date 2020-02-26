import { 
  RECEIVE_SESSION_ERRORS, 
  RECEIVE_CURRENT_USER,
  CLEAR_ERRORS
} from "../actions/session_actions";

const nullErrors = [];

const sessionErrorsReducer = (state = nullErrors, action) => {
    // debugger
    Object.freeze(state)
    switch (action.type) {
      case RECEIVE_SESSION_ERRORS:
        return action.errors;
      case RECEIVE_CURRENT_USER:
        return nullErrors;
      case CLEAR_ERRORS:
        return [];
      default:
        return state;
    }    
}

export default sessionErrorsReducer;