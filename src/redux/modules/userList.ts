import {createAction, handleActions} from 'redux-actions';
import {produce} from 'immer';
import axios from 'axios';
import {AppDispatch} from '../configureStore';

// actions
const GET_ALL_USER__LIST = 'userInfo/GET_ALL_USER_LIST';

// action creators
type allUserListType = {
  allUserList: undefined;
};
const getAllUserList = createAction(
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
export const __getAllUserList = () => {
  return async function (dispatch: AppDispatch) {
    try {
      const allUserList = await axios.get(
        'https://mxl2ywa4zhlvwjymvb5gnc247a0qfndn.lambda-url.ap-northeast-2.on.aws/?limit=100&offset=0',
      );
      dispatch(getAllUserList(allUserList as any));
      // console.log(allUserList.data);
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
        // console.log(action.payload);
      }),
  },
  initialState,
);

// actionCreatorExport
