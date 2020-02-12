import C from '../constants'

export const group = (state = [], action={ type: null }) => {
    switch (action.type) {
        case C.ADD_COLOR:
            return state
        case C.RATE_COLOR:
            return (state.id !== action.id) ?
                state : 
                [...state]
        default :
            return state
    }
}

export const photos = (state = [], action={ type: null }) => {
    switch (action.type) {
        case C.ADD_COLOR :
            return [
                ...state,
                group([], action)
            ]
        case C.RATE_COLOR :
            return state.map(
                c => group(c, action)
            )
        case C.REMOVE_COLOR :
            return state.filter(
                c => c.id !== action.id
            )
        default:
            return state
    }
}

export const sort = (state="SORTED_BY_DATE", action={ type: null }) => {
    switch (action.type) {
        case "SORT_COLORS":
            return action.sortBy
        default :
            return state
    }
}
