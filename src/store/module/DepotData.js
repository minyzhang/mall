const data = {
  arr: [],
};
const depotData = (state = data, actions) => {
  switch (actions.type) {
    case "search":
      return {
        ...state,
        arr: [...actions.arr],
      };
    case "loginOut":
      return {
        ...state,
        arr: [...actions.arr],
      };
    default:
      return state;
  }
};
export default depotData;
