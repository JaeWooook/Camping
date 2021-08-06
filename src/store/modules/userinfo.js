const LOGIN = "userinfo/LOGIN";

export const login = () => ({ type: LOGIN });

const initialState = [
  {
    email: "",
    name: "",
  },
];

const userinfo = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return state; //서버에서 받은 정보를 넘겨준다.
    default:
      return state;
  }
};

export default userinfo;
