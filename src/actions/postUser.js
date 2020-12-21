const setLoginUser = (authUser) => (dispatch) => {
  dispatch({
    type: "SET_LOGIN",
    authUser,
  });
};

export { setLoginUser };
