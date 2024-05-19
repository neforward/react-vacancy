const defaultState = {
    counter: 10,
}
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

export const counterReduce = (state = defaultState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + action.payload,
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - action.payload,
            }
        default:
            return state
    }
}
export const increase = (payload) => ({ type: INCREMENT, payload })
export const decrease = (payload) => ({ type: DECREMENT, payload })

// export default counterReduce