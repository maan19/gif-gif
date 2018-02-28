

const defaultState = {
    query:'',
    gifs:[],
    isFetchingGifs:false,
    error:'',
    available:false,
}

const searchPageReducer = (state=defaultState,action) => 
{
    switch(action.type){
        case 'SET_QUERY':
            return {
                ...state,
                query:action.query
            }
        case 'START_FETCHING_GIFS':
            return {
                ...state,
                isFetchingGifs:true,
                error:false
            }
        case 'FETCH_GIFS_SUCCESS':
            return {
                ...state,
                isFetchingGifs:false,
            }
        case 'FETCH_GIFS_ERROR':
            return {
                ...state,
                isFetchingGifs:false,
                error:true
            }
        case 'SET_GIFS':
            return {
                ...state,
                gifs:action.gifs,
                available:true
            }
        default:
            return state;
    }
}



export default searchPageReducer;