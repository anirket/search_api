import { POPULAR_MOVIES, RATED_MOVIES, NOW_PLAYING, SEARCHED_QUERY, SWITCH_TAB, LOADING } from './constants'

export const initialState = {
    popular_movies: [],
    now_playing: [],
    rated_movies: [],
    searched_query: [],
    loading: false,
    active: 1
};


export const moviereducer = (state = initialState, action) => {

    switch (action.type) {
        case POPULAR_MOVIES: {
            return {
                ...state,
                popular_movies: action.payload,
                loading:false
            }
        }
        case RATED_MOVIES: {
            return {
                ...state,
                rated_movies: action.payload,
                loading:false
            }
        }
        case NOW_PLAYING: {
            return {
                ...state,
                now_playing: action.payload,
                loading:false
            }
        }
        case SEARCHED_QUERY: {
            return {
                ...state,
                searched_query: action.payload,
                loading:false
            }
        }
        case SWITCH_TAB: {
            return {
                ...state,
                active: action.payload,
                loading:false
            }
        }
        case LOADING: {
            return {
                ...state,
                loading:true
            }
        }
        default: {
            return state
        }
    }
}