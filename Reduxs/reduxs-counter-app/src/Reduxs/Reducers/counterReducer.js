import { DECREMENT, INCREMENT , RESET } from "../actions/ActionsType";


const count = 0;

const counterReducer = (state = count, action) => {

    switch (action.type) {
        // case INCREMENT:
        //     return state + 1;
            case INCREMENT:
                if (state <= 50) {
                    return state + 1;
                } else {
                    return state + 2;
                }
    
        case DECREMENT:
            // return state > 1 ? state - 1 : state; 
            if(state > 0) {
                if (state <= 51) {
                    return state - 1;
                } else {
                    return state - 2;
                }
            } else {
                return state;
            }
    
        case RESET:
            return state >=1 ? 0 : state;
    
        default:
            return state;
    }

    //  if (action.type == INCREMENT) {
    //       return state + 1;
    //   } else if (action.type == DECREMENT) {
    //     return state > 1 ? state - 1 : state;
    //   } else if (action.type == RESET) {
    //     return state > 1 ? 0 : state; 
    //   } else {
    //      return state;
    //   }
}

export default counterReducer;