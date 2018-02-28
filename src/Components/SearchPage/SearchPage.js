import React from 'react';
import {connect} from 'react-redux';

import {fetchGifsThunk} from '../../actions/searchpage';
import {setSelectedGif,closeModal} from '../../actions/modal';
import {saveFavouriteGifThunk} from '../../actions/savingGif';
import SearchBar from '../Searchbar/SearchBar';
import GifList from '../Giflist/GifList';
import GifModal from '../GifModal/GifModal';
import {container} from './SearchPage.css';
import {resetSaveGif} from '../../actions/savingGif';

class SearchPage extends React.Component{
    
    componentWillMount() {
        console.log(' search will mount');
        
    }

    componentDidMount() {
        console.log('search did mount')
    }

    

    shouldComponentUpdate(){
        console.log(' search should component update');
        return true;
    }

    componentWillUpdate() {
        console.log('search will update');
    }

    componentDidUpdate(){
        console.log('search did update');
    }

    render() {
        console.log('search render');
        return (
            <div className={container}>
                <SearchBar apiCallHandler= {this.props.apiCallHandler}/>
                {this.props.isFetchingGifs && <p>Loading..</p>}
                {this.props.error && <p>Ooops! there was some error in loading gifs!</p>} 
                {this.props.available && <GifList 
                    gifs={this.props.gifs.data} 
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
    apiCallHandler: (search) => {
        console.log(search);
        dispatch(fetchGifsThunk(search));
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
        ...state.search,
        ...state.modal,
        ...state.savingGif,
        ...state.auth
    })
}

const connectedSearchPage = connect(mapStateToProps,mapDispatchToProps) (SearchPage);

export default connectedSearchPage;