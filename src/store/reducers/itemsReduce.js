const defaultState = {
    items: ['qwerty', 'qwertyu2', 'baysal'],
}

const ADD_ITEM = 'ADD_ITEM'

export const itemsReduce = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload],
            }

        default:
            return state
    }
}

export const addItemAction = (payload) => ({ type: ADD_ITEM, payload })

// export default itemsReduce
