import { createStore } from 'redux'
import mainReducer from '../reducers'

export const initialState = {
    likedSongs: [],
    nowPlaying: {
        isPlaying: false,
        playingTitle: {}
    }
}

export const store = createStore(
    mainReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)