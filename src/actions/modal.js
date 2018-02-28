export const setModalState = () =>({
    type:"SET_MODAL_STATE"
});

export const closeModal = () => ({
    type:"CLOSE_MODAL"
})

export const setSelectedGif = (gif) => ({
    type:"SET_SELECTED_GIF",
    gif
});
