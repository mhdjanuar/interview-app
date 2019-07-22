const initialState = {
    fetching: true,
    fetched:false,
    data: []
  }

  export default function question(state = initialState, action)  {
    switch (action.type) {
      case "GET_DATA":
        return {
          ...state,
          fetching: true
        };
      case "GET_DATA_FULFILLED":
        return {
          ...state,
          fetching: false,
          fetched:true,
          data: action.payload.data.data
        };
      case "GET_DATA_REJECTED":
        return {
          ...state,
          fetching: false,
        //   error: payload.message
        };
      default:
          return state
    }
  }  