import {createAction, handleActions} from 'redux-actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {produce} from 'immer';
import axios from 'axios';
import {AppDispatch} from '../configureStore';

// actions
const GET_ALL_USER__LIST = 'userInfo/GET_ALL_USER_LIST';

// action creators
type allUserListType = {
  allUserList: undefined;
};
export const getAllUserList = createAction(
  GET_ALL_USER__LIST,
  (data: allUserListType) => ({
    data,
  }),
);

// initialState
type UserListType = {
  data: any;
  userList: [];
};
const initialState: UserListType = {
  data: undefined,
  userList: [],
};

// middlewareActions
export const __getAllUserList: any = () => {
  return async function (dispatch: AppDispatch) {
    try {
      const allUserList = await axios.get(
        'https://vksxl3ztiuk5lbbpssgcebsmni0eqejl.lambda-url.ap-northeast-2.on.aws/?limit=100&offset=0',
      );
      dispatch(getAllUserList(allUserList as any));
      const isBlock = {
        isBlock: false,
      };
      let newAllUserList: any = [];
      for (let i = 0; i < allUserList.data.length; i++) {
        newAllUserList.push(Object.assign({...allUserList.data[i]}, isBlock));
      }
      await AsyncStorage.setItem('userList', JSON.stringify(newAllUserList));
    } catch (err) {
      console.log(err);
    }
  };
};

//reducer
export default handleActions(
  {
    [GET_ALL_USER__LIST]: (state, action) =>
      produce(state, draft => {
        draft.userList = action.payload.data.data;
      }),
    // [BLOCK_USER]: (state, action) => produce(state, draft => {
    // }),
  },
  initialState,
);
