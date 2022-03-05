import {
    POPULAR_MOVIES, RATED_MOVIES, NOW_PLAYING, SEARCHED_QUERY, SWITCH_TAB, LOADING, APIERROR
} from "./constants";

import axios from "axios";
import { BASE_URL, NOW_PLAYING_API, POPULAR_API, RATED_API } from "../Utils/API";


export const switchtab = (tab_number) => {
    return dispatch => {
        dispatch({
            type: SWITCH_TAB,
            payload: tab_number
        })
    }
}

export const nowplayingmovies = () => {

    return async (dispatch) => {
        dispatch({
            type: LOADING
        })

        try {

            const results = await axios.get(`${BASE_URL}${NOW_PLAYING_API}?api_key=${process.env.REACT_APP_API_KEY}`)
            const movies = results.data.results;
            dispatch({
                type: NOW_PLAYING,
                payload: movies
            });

        } catch (error) {
            dispatch({
                type: APIERROR,
            });
        }


    };
};


export const getpopularmovies = () => {

    return async (dispatch) => {
        dispatch({
            type: LOADING
        })

        try {

            const results = await axios.get(`${BASE_URL}${POPULAR_API}?api_key=${process.env.REACT_APP_API_KEY}`)
            const movies = results.data.results;
            dispatch({
                type: POPULAR_MOVIES,
                payload: movies
            });


        } catch (error) {
            dispatch({
                type: APIERROR,
            });
        }



    };
};


export const getratedmovies = () => {

    return async (dispatch) => {
        dispatch({
            type: LOADING
        })

        try {

            const results = await axios.get(`${BASE_URL}${RATED_API}?api_key=${process.env.REACT_APP_API_KEY}`)
            const movies = results.data.results;
            dispatch({
                type: RATED_MOVIES,
                payload: movies
            });


        } catch (error) {
            dispatch({
                type: APIERROR,
            });
        }


    };
};
