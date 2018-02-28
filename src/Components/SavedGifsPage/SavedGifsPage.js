import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setSelectedGif,closeModal} from '../../actions/modal';
import GifList from '../Giflist/GifList';
import GifModal from '../GifModal/GifModal';
import {container} from './SavedGifsPage.css';

class SavedGifsPage extends Component {

    componentDidMount(){
        //dispatch fetchsavedgifsthunk
    }

    render() {
        return (
            <div className={container}>
            {this.props.error && <p>Ooops! there was some error in loading gifs!</p>} 
            {this.props.available && <GifList gifs={this.props.favouriteGifs} gifModalHandler={this.props.gifModalHandler} />}
            <GifModal 
            selectedGif ={this.props.selectedGif} 
            modalOpen={this.props.isModalOpen} 
            gifModalCloseHandler={this.props.gifModalCloseHandler}
            location={this.props.match.path}
            />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('map',state);
    return {
        ...state.favourite,
        ...state.modal
    }

}

const mapDispatchToProps = (dispatch) => ({
     gifModalHandler: (gif) => {
        dispatch(setSelectedGif(gif));
    },
    gifModalCloseHandler:() => {
        dispatch(closeModal());
     }
})


export default connect(mapStateToProps,mapDispatchToProps)(SavedGifsPage);