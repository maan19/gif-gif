import React from 'react';
import {startLogin,startLogout} from '../../actions/auth';
import {auth} from './AuthButtons.css'

const AuthButtons = (props) => {
    return (
        <div className={auth}>
            {!props.uid && <button onClick = {startLogin} >Login</button>}
            {props.uid && <button onClick = {startLogout}>Logout</button>}
        </div>
    );
};

export default AuthButtons;