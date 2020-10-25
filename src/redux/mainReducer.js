import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn41160665Reducer from '../features/SignIn41160665/redux/reducers'
import SignIn41160495Reducer from '../features/SignIn41160495/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn41160665: SignIn41160665Reducer,
SignIn41160495: SignIn41160495Reducer,

});