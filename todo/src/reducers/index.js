const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  console.log(`action`, action);
  switch (action.type) {
    default:
      return state;
  }
};
