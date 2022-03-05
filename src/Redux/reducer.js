import { POPULAR_MOVIES, RATED_MOVIES, NOW_PLAYING, SEARCHED_QUERY, SWITCH_TAB, LOADING, APIERROR, NORESULTSFOUND } from './constants'

export const initialState = {
    popular_movies: [],
    now_playing: [],
    rated_movies: [],
    searched_query: [],
    loading: false,
    apierror: false,
    active: 1,
    nomoviesfound: false
};


export const moviereducer = (state = initialState, action) => {

    switch (action.type) {
        case POPULAR_MOVIES: {
            return {
                ...state,
                popular_movies: action.payload,
                loading: false,
                apierror: false
            }
        }
        case RATED_MOVIES: {
            return {
                ...state,
                rated_movies: action.payload,
                loading: false,
                apierror: false
            }
        }
        case NOW_PLAYING: {
            return {
                ...state,
                now_playing: action.payload,
                loading: false,
                apierror: false
            }
        }
        case SEARCHED_QUERY: {
            return {
                ...state,
                searched_query: action.payload,
                nomoviesfound:false,
                loading: false,
                apierror: false
            }
        }
        case SWITCH_TAB: {
            return {
                ...state,
                active: action.payload,
                loading: false
            }
        }
        case LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case NORESULTSFOUND: {
            return {
                ...state,
                nomoviesfound:true,
                loading: false
            }
        }
        case APIERROR: {
            return {
                ...state,
                loading: false,
                apierror: true
            }
        }
        default: {
            return state
        }
    }
}