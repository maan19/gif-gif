
export const setQuery = (query) => ({
    type:"SET_QUERY",
    query

});

export const startFetchingGifs = () => ({
    type:"START_FETCHING_GIFS"
});

export  const fetchGifsSuccess = () => ({
    type:"FETCH_GIFS_SUCCESS"
});

export const fetchGifsError = () => ({
    type:"FETCH_GIFS_ERROR"
});

export const setGifs = (gifs) => ({
    type:"SET_GIFS",
    gifs
});


export const fetchGifsThunk = (search) => {
    return (dispatch) => {
        dispatch(startFetchingGifs());
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=q3agVDAfwPaTIedaeadURP3qO4PdCWER&limit=25`)
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
        });
    }
}