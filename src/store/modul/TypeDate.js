const data = {
  name: 'zhangsn',
  age:12
  
};
const TypeData = (state = data, actions) => {
  switch (actions.type) {
    case "miny":
      return {
        ...state,
        ...actions,
      };
    default:
      return state;
  }
};
export default TypeData;
