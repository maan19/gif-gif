const defaultState = {
    isSaving:false,
    error:false,
    success:false
}

const savingGifReducer = (state=defaultState,action) => {
    switch(action.type){
        case 'START_SAVING_GIF':
            return {
                ...state,
                isSaving:true,
                error:false
            }
        case 'SAVING_GIF_SUCCESS':
            return {
                ...state,
                isSaving:false,
                success:true
            }
        case 'SAVING_GIF_ERROR':
            return {
                ...state,
                isSaving:false,
                error:true
            }
        case "RESET_SAVE_GIF":
            return {
                isSaving:false,
                error:false,
                success:false
            }
        default:
            return state;
    }

}

export default savingGifReducer;