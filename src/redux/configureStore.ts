import {useDispatch} from 'react-redux';
import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import thunk from 'redux-thunk';
import UserList from './modules/userList';

const rootReducer = combineReducers({
  userList: UserList,
});

const store: Store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>;
export default store;
