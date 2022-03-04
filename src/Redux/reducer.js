import { POPULAR_MOVIES, RATED_MOVIES, NOW_PLAYING, SEARCHED_QUERY, SWITCH_TAB } from './constants'

export const initialState = {
    popular_movies: [],
    now_playing: [],
    rated_movies: [],
    searched_query: [],
    active: 1
};


export const moviereducer = (state = initialState, action) => {

    switch (action.type) {
        case POPULAR_MOVIES: {
            return {
                ...state,
                popular_movies: action.payload
            }
        }
        case RATED_MOVIES: {
            return {
                ...state,
                rated_movies: action.payload
            }
        }
        case NOW_PLAYING: {
            return {
                ...state,
                now_playing: action.payload,
                active: 1
            }
        }
        case SEARCHED_QUERY: {
            return {
                ...state,
                searched_query: action.payload
            }
        }
        case SWITCH_TAB: {
            return {
                ...state,
                active: action.payload
            }
        }
        default: {
            return state
        }
    }
}