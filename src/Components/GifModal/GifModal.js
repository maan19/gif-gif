import React from 'react';
import Modal from 'react-modal';
import {modal,closebutton,savebutton} from './GifModal.css';

const  gifModal = (props) => {
    const onFavClick = () =>{
        props.saveGifHandler(props.selectedGif);
    }
    return (
        <Modal isOpen = {props.modalOpen} className={modal}>
        <img src = {props.selectedGif? props.selectedGif.images.original.url:''}/>
         <button onClick = {props.gifModalCloseHandler} className={closebutton}>Close</button>
         {props.isSaving && <p>Saving...</p>}
         {props.success && <p>Saved!</p>}
         {props.error && <p>Error!</p>}
         {props.location !== '/savedgifs' && props.uid && <button onClick={onFavClick} className={savebutton}>Add to Favourites</button>}
        </Modal>

    );
}

export default gifModal;