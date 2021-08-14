import React, { useState } from 'react';

import './Navigation.scss'

function Navigation () {
    return (
        <div className="navigation">
            <a href="/"><button>Home</button></a>
            <a href="/bracket"><button>SSBU Bracket</button></a>
            <button>SSBU Rankings</button>
            <button>SSBU History</button>
        </div>
    )
}

export default Navigation;