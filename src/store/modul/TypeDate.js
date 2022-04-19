const data = {
  name: 'zhangsn',
  age:12
  
};
const TypeData = (state = data, actions) => {
  switch (actions.type) {
    case "detail":
      return {
        ...state,
        ...actions,
        age : actions.age+state.age
      };
    default:
      return state;
  }
};
export default TypeData;
