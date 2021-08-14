import React, { useState } from 'react';

import './Footer.scss'

function Footer () {
    return (
        <div className="footer">
            <a href="https://www.github.com/ajisakson"><img src="./github.png" />github</a>
            <a href="https://www.twitter.com/austinisakson"><img src="./twitter.png" />twitter</a>
        </div>
    )
}

export default Footer;