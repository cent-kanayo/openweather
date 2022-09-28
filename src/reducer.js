const reducer = (state, action) => {
  if (action.type === "SET_LOADING") {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === "DATA_SUCCESS") {
    return {
      ...state,
      loading: false,
      info: action.payload,
    };
  }
  if (action.type === "ERROR") {
    return {
      ...state,
      error: true,
    };
  }
  if (action.type === "UPDATE_USERINPUT") {
    return {
      ...state,
      userInput: action.payload,
    };
  }
  if (action.type === "SUBMIT") {
    return {
      ...state,
      city: state.userInput,
    };
  }
  throw new Error("No matching action type!");
};
export default reducer;
