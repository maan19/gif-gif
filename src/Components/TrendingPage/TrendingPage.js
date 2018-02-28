import React from 'react';
import GifList from '../Giflist/GifList';
import GifModal from '../GifModal/GifModal';
import {connect} from 'react-redux';
import {fetchGifsThunk} from '../../actions/trendingpage';
import {setSelectedGif,closeModal} from '../../actions/modal';
import {saveFavouriteGifThunk} from '../../actions/savingGif';
import {container} from './TrendingPage.css';
import {resetSaveGif} from '../../actions/savingGif';

class  TrendingPage extends React.Component{
    componentWillMount() {
        console.log('trending will mount');
    }

    componentDidMount() {
        console.log('trending did mount');
        this.props.apiCallHandler();
    }

    shouldComponentUpdate(){
        console.log('trending should component update');
        return true;
    }

    componentWillUpdate() {
        console.log('trending will update');
    }

    componentDidUpdate(){
        console.log('trending did update');
    }

    render() {
        console.log('trending render')
        return (
            <div className={container}>
            {this.props.isFetchingGifs && <p>Loading..</p>}
            {this.props.error && <p>Ooops! there was some error in loading gifs!</p>} 
            {this.props.available && <GifList 
                gifs={this.props.trendingGifs.data} 
                gifModalHandler={this.props.gifModalHandler}
                saveGifHandler = {this.props.saveGifHandler} />}
            <GifModal 
                selectedGif ={this.props.selectedGif} 
                modalOpen={this.props.isModalOpen} 
                gifModalCloseHandler={this.props.gifModalCloseHandler}
                location={this.props.match.path}
                saveGifHandler={this.props.saveGifHandler}
                success={this.props.success}
                error={this.props.error}
                isSaving={this.props.isSaving}
                uid={this.props.uid}
                />
            </div>
            

        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    apiCallHandler: () => {
        console.log();
        dispatch(fetchGifsThunk());
     },
     gifModalHandler: (gif) => {
        dispatch(setSelectedGif(gif));
    },
    gifModalCloseHandler:() => {
        dispatch(closeModal());
        dispatch(resetSaveGif());
     },
     saveGifHandler:(gif) =>{
        dispatch(saveFavouriteGifThunk(gif));
    }
})

const mapStateToProps =(state) => {
    return ({
        ...state.trending,
        ...state.modal,
        ...state.savingGif,
        ...state.auth
    })
}



export default connect(mapStateToProps,mapDispatchToProps)(TrendingPage);