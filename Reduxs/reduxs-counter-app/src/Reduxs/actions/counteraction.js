import { DECREMENT, INCREMENT, RESET } from "./ActionsType"

export const Increment = () => {
    return {
        type: INCREMENT
    }
}

export const Decrement = () => {
    return {
        type: DECREMENT
    }
}

export const Reset = () => {
    return { type: RESET }
}