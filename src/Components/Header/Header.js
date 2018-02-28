import React, { Component } from 'react';
import {connect} from 'react-redux';
import NavLinks from '../../Components/NavLinks/NavLinks';
import AuthButtons from '../AuthButtons/AuthButtons';
import {container} from './Header.css'


class Header extends Component {
    render() {
        return (
            <div className={container}>
                <NavLinks  uid={this.props.uid}/>
                <AuthButtons  uid ={this.props.uid}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.auth
    }
}

export default connect(mapStateToProps)(Header);
