import { DEC, INC, RESET } from "./ActionType"

export const Increment = () => {
    return {
        type: INC
    }
}

export const Decrement = () => {
    return {
        type: DEC
    }
}

export const Reset = () => {
    return { type: RESET }
}