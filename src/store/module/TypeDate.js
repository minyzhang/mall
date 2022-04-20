const data = {
  collapsed: true
};
const TypeData = (state = data, actions) => {
  switch (actions.type) {
    case "toggle":
      return {
        ...state,
        ...actions,
        collapsed:actions.collapsed
      };
    default:
      return state;
  }
};
export default TypeData;
