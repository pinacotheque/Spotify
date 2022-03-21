export const addToLike = (title) => ({
    type: 'ADD_TO_LIKE',
    payload: title,
})

export const removeFromLike = (index) => ({
    type: 'REMOVE_FROM_LIKE',
    payload: index,
})
export const playSong = (song) => ({
    type: 'PLAY_SONG',
    payload: song,
})
