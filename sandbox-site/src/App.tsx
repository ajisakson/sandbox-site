import React, { useState } from 'react';

import './App.scss';

function App() {

    return (
        <div className="App">
            <div className="navigation">
                <button>SSBU Bracket</button>
                <button>SSBU Rankings</button>
                <button>SSBU History</button>
            </div>
            <div className="homepage">
                <div className="title">byssen<img src="./pokeball.png" />dev</div>
                <div className="subtitle">sandbox and sideproject<br />home for austin isakson</div>
            </div>
            <div className="footer">
                <a href="https://www.github.com/ajisakson"><img src="./github.png" />github</a>
                <a href="https://www.twitter.com/austinisakson"><img src="./twitter.png" />twitter</a>
            </div>
        </div >
    );
}

export default App;
