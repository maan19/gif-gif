const defaultState = {
    isModalOpen:false,
    selectedGif:undefined,
}

const modalReducer = (state=defaultState,action) => {
    switch(action.type){
        case 'SET_SELECTED_GIF':
            return {
                ...state,
                selectedGif:action.gif,
                isModalOpen:true
            }
        case 'CLOSE_MODAL':
            return {
                ...state,
                isModalOpen:false,
                selectedGif:undefined
            }
        default:
            return state;
    }

}

export default modalReducer;