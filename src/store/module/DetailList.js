const data = {
  arr: [],
};
const detailList = (state = data, actions) => {
  switch (actions.type) {
    case "list":
      return {
        ...state,
        arr: [...actions.arr],
      };
    default:
      return state;
  }
};
export default detailList;
