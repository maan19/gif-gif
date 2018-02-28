import database from '../firebase/firebase';

export const start_saving_gif = () => ({
    type:"START_SAVING_GIF"
});

export const savingError = () => ({
    type:"SAVING_GIF_ERROR"
});

export const saveSuccess = () => ({
    type:"SAVING_GIF_SUCCESS"
});

export const resetSaveGif = () => ({
    type:"RESET_SAVE_GIF"
});

export const saveFavouriteGif = (gif) => ({
    type:"SAVE_FAVOURITE_GIF",
    gif

});

export const saveFavouriteGifThunk = (gif) => {
    return (dispatch,getState) => {
        dispatch(start_saving_gif());
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/likedGifs`).push(gif).then(() => {
            dispatch(saveFavouriteGif(gif));
            dispatch(saveSuccess());
        }).catch((e) => {
            dispatch(savingError(e));
    })
}
}