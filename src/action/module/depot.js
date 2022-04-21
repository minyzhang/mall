const depot = (info) => {
    return ({
      type: "search",
      arr: [...info]
  })
}
export default depot;