import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.scss'
import Home from './routes/Home';
import BracketPage from './routes/BracketPage';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() { // eslint-disable-line no-unused-vars

    return (
        <div className="App">
            <Navigation />
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/bracket" exact component={BracketPage} />
                </Switch>
            </Router>
            <Footer />
        </div >
    );
}

export default App;
