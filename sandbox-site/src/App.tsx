import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.scss';
import Home from './routes/Home';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {

    return (
        <div className="App">
            <Navigation />
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </Router>
            <Footer />
        </div >
    );
}

export default App;
