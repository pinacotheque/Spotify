import { initialState } from '../store'

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_LIKE':
            return {
                ...state,
                likedSongs: [...state.likedSongs, action.payload],
            }
        case 'REMOVE_FROM_LIKE':
            return {
                ...state,
                likedSongs: state.likedSongs.filter((b, i) => i !== action.payload),
            }
        case 'PLAY_SONG':
            return {
                ...state,
                nowPlaying: {
                    isPlaying: true,
                    playingTitle: action.payload
                }
            }
        case 'PAUSE_SONG':
            return {
                ...state,
                likedSongs: state.likedSongs.filter((b, i) => i !== action.payload),
            }
        default:
            return state
    }
}

export default mainReducer
