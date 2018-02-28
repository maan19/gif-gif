import {Router,Switch,Route} from 'react-router-dom';
import React from 'react';
import createHistory from 'history/createBrowserHistory';
import SearchPage from '../Components/SearchPage/SearchPage';
import TrendingPage from '../Components/TrendingPage/TrendingPage';
import Header from '../Components/Header/Header';
import SavedGifsPage from '../Components/SavedGifsPage/SavedGifsPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();
const AppRouter = () => (
    <Router history = {history}>
    <div>
        <Header/>
        <Switch>
            <Route path="/search" component = {SearchPage} exact={true}/>
            <Route path = "/trending" component = {TrendingPage} exact={true} />
            <PrivateRoute path = "/savedgifs" component = {SavedGifsPage} exact={true} />
        </Switch>
    </div>
    </Router>
)

export default AppRouter;