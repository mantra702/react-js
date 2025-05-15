import { DEC, INC, RESET } from "../Actions/ActionType";

const count = 0;

const counterReducer = (state = count, action) => {

    switch (action.type) {
        case INC:
            return state + 1;
        case DEC:
            if (state > 1) {
                return state - 1;
            } else {
                return state;
            }
        case RESET:
            return 0;
        default:
            return state;
    }
}

export default counterReducer;