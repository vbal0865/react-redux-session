const todos = (state = [], {type,payload}) => {
    switch (type) {
      case 'ADD_NOTE':
      console.log(payload)
        return [
          ...state,
          payload
        ]

      case 'MOCK_FETCH_SUCCEEDED':
      console.log(payload)
        return [
          ...state,
          ...payload
        ]
      default:
        return state
    }
  }
  
  export default todos
  