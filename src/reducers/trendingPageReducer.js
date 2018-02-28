const defaultState = {
    trendingGifs:[],
    isFetchingGifs:false,
    error:false,
    available:false,
}


const trendingPageReducer = (state=defaultState,action) => 
{
    switch(action.type){
        case 'START_FETCHING_TRENDING_GIFS':
            return {
                ...state,
                isFetchingGifs:true,
                error:false
            }
        case 'FETCH_TRENDING_GIFS_SUCCESS':
            return {
                ...state,
                isFetchingGifs:false,
            }
        case 'FETCH_TRENDING_GIFS_ERROR':
            return {
                ...state,
                isFetchingGifs:false,
                error:true
            }
        case 'SET_TRENDING_GIFS':
            return {
                ...state,
                trendingGifs:action.gifs,
                available:true
            }
        default:
            return state;
    }
}


export default trendingPageReducer;