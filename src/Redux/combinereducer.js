import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { moviereducer } from './reducer'

const reducer = combineReducers({
    moviecase: persistReducer(
        {
            key: 'moviecase',
            storage,
            keyPrefix: 'moviecase'
        },
        moviereducer
    )
});

export default reducer;