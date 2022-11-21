export const reducer = (state, action) => {


  switch (action.type) {
    case "ADD": {
      return { ...state, myNum: action.payload }
    }
    case "SUB": {
      return { ...state, myNum: action.payload }
    }
    case "USER_LOGIN": {
      return { ...state, user: action.payload, isLogin:true }
    }
    case "USER_LOGOUT": {
      return { ...state, user: null, isLogin:false }
    }
    case "PRODUCT": {
      return { ...state, product: action.payload, isLogin:true }
    }
    case "GET_CART": {
      return { ...state, cart: action.payload, isLogin:true }
    }
    case "ADD_TO_CART": {
      return { ...state, cart: action.payload, isLogin:true }
    }
    case "DELETE_FROM_CART": {
      return { ...state, cart :action.payload , isLogin: true }
    }
    
    case "total": {
      return { ...state, bill :action.payload , isLogin: true }
    }

    case "CHANGE_THEME": {
      return { ...state, darkTheme: !state.darkTheme }
    }
    
    
    // case GET_CART:
    //         return {
    //             ...state,
    //             cart: action.payload,
    //             loading: false
    //         }

    //     case ADD_TO_CART:
    //         return {
    //             ...state,
    //             cart: action.payload
    //         }

       

    //     case CART_LOADING:
    //         return {
    //             ...state, 
    //             loading: true
    //         }
    default: {
      return state
    }
  }
}