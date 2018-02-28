
export const startFetchingGifs = () => ({
    type:"START_FETCHING_TRENDING_GIFS"
});

export  const fetchGifsSuccess = () => ({
    type:"FETCH_TRENDING_GIFS_SUCCESS"
});

export const fetchGifsError = (error) => ({
    type:"FETCH_TRENDING_GIFS_ERROR",
    error
});

export const setGifs = (gifs) => ({
    type:"SET_TRENDING_GIFS",
    gifs
});


export const fetchGifsThunk = () => {
    return (dispatch) => {
        dispatch(startFetchingGifs());
        fetch(`https://api.giphy.com/v1/gifs/trending?api_key=q3agVDAfwPaTIedaeadURP3qO4PdCWER&limit=25&rating=G`)
        .then((list) => {
            dispatch(fetchGifsSuccess());
            return list.json();
        })
        .then((gifs) => {
            console.log(gifs);
            dispatch(setGifs(gifs))
        })
        .catch((e) => {
            dispatch(fetchGifsError(e));
        })
    }
}