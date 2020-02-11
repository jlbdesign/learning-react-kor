import C from '../constants'

export const photo = (state = {}, action={ type: null }) => {
    switch (action.type) {
        case C.ADD_COLOR:
            return {
                id: action.id,
                path: action.path,
                title: action.title,
                color: action.color,
                timestamp: action.timestamp,
                rating: 0
            }
        case C.RATE_COLOR:
            return (state.id !== action.id) ?
                state :
                {
                    ...state,
                    rating: action.rating
                }
        default :
            return state
    }
}

export const photos = (state = [], action={ type: null }) => {
    switch (action.type) {
        case C.ADD_COLOR :
            return [
                ...state,
                photo({}, action)
            ]
        case C.RATE_COLOR :
            return state.map(
                c => photo(c, action)
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
