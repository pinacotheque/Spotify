export const actionCreators = {
    addToLike: data => ({ type: "ADD_TO_LIKE", payload: data }),
    removeLike: data => ({ type: "REMOVE_FROM_LIKE", payload: data }),
};