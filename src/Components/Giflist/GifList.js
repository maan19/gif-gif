import React from 'react';
import Gif from '../Gif/Gif';
import {giflist} from './GifList.css'

const  GifList  = (props) => {
    
    return (
        <div className={giflist}>
       {props.gifs.map((gif) => {
        return <Gif 
        key = {gif.id} 
        gif = {gif} 
        gifModalHandler = {props.gifModalHandler}
        saveGifHandler={props.saveGifHandler}/>
    }) }
       </div>
    );
}

export default GifList;