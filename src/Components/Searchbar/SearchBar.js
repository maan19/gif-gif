import React from 'react';
import {sbar} from './SearchBar.css';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchString:''
        }

    }

    onChangeHandler = (e) => {
        const searchString = e.target.value;
        this.setState({searchString});
    }

    onClickHandler = (e) => {
       this.props.apiCallHandler(this.state.searchString);

    }

    render() {
        return (
            <div className={sbar}>
            <input type="text" style={{width:'90%'}} onChange={this.onChangeHandler} placeholder="Search"  />
            <button onClick={this.onClickHandler}>Go</button>
            </div>
        )
    }
}

export default SearchBar;