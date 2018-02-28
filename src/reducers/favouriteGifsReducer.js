const defaultState = {
    favouriteGifs:[],
    isFetching:false,
    error:false,
    available:false
};

const favouriteGifsReducer = (state=defaultState,action) =>{
    switch(action.type){
        case "SET_FAVOURITE_GIFS":
            return {
                ...state,
                favouriteGifs:action.favouriteGifs,
                isFetching:false,
                available:true
            }
        case "START_FETCHING_FAVOURITE_GIFS":
            return {
                ...state,
                isFetching:true,
                error:false
            }
        case "FETCH_FAVOURITE_GIFS_ERROR":
            return {
                ...state,
                error:true,
                isFetching:false
            }
        case 'SAVE_FAVOURITE_GIF':
            return {
                ...state,
                favouriteGifs:state.favouriteGifs.concat(action.gif)
            }
        case "CLEAR_FAVOURITE_GIFS":
            return {
                ...state,
                favouriteGifs:[]
            }
        default:
            return state;
    }
}

export default favouriteGifsReducer;