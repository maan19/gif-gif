import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute  = ({uid,component:Component,...rest}) => (
    <Route {...rest} component = {(props) => (
        uid? (<Component {...props} />):
        (<Redirect to = '/trending'/>)

    )} />
);

const mapStateToProps = (state) => {
    return {
        ...state.auth
    }
}

export default connect(mapStateToProps,null)(PrivateRoute);
