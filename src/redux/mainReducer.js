import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth1160957Reducer from '../features/EmailAuth1160957/redux/reducers';
import SignIn41160665Reducer from '../features/SignIn41160665/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth1160957: EmailAuth1160957Reducer,
SignIn41160665: SignIn41160665Reducer,

});