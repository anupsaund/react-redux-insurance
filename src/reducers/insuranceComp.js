const initialState = {
  count: 0,
  excess: 50,
  abc: "123"
};
  
 export function insurance (state = initialState, action) {
  
    switch(action.type) {
      case 'INCREMENT':
        return {
          ...state,
          count: state.count + 1
        };
      case 'DECREMENT':
        return {
          ...state,
          count: state.count - 1
        };
      case 'RESET':
        return {
          ...state,
          count: 0
        };
      case 'SET_EXCESS':
        return {
          ...state,
          excess: action.payload
        }
      default:
        return state;
    }
  }
  