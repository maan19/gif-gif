import React from 'react';
import database from '../../firebase/firebase';
import {gif} from './Gif.css';


const Gif = (props) => {

    const gifClickHandler = () => 
    {
        console.log('gif clicked');
        props.gifModalHandler(props.gif);
    }
    const saveClickHandler = () => {
        props.saveGifHandler(props.gif)

    }

    return (
        <div className={gif}>
            <img onClick = {gifClickHandler} src={props.gif.images.fixed_height.url}/>
        </div>
    );

}

export default Gif;