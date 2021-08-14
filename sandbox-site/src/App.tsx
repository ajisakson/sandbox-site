import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.scss'
import Home from './routes/Home';
import Bracket from './routes/Bracket';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {

    return (
        <div className="App">
            <Navigation />
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/bracket" exact component={Bracket} />
                </Switch>
            </Router>
            <Footer />
        </div >
    );
}

export default App;
