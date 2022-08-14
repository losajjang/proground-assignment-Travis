import {combineReducers, createStore, Reducer, Store} from 'redux';
import UserList from './modules/userList';

const rootReducer: Reducer = combineReducers({
  userList: UserList,
});

const store: Store = createStore(rootReducer);

export default store;
