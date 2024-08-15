
import { combineReducers } from 'redux';
import { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';

 const rootReducer = combineReducers({
  // user: userReducer,
});

export const useTypedSelector:TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;