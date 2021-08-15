import React, { useState } from "react";
import NumericInput from "react-numeric-input";
import Bracket from "./Bracket";

import "./Bracket.scss";

function BracketPage() {
    // eslint-disable-line no-unused-vars
    const [entriesInput, updateEntries] = useState(2);
    const [showBracket, renderBracket] = useState(false);
    return (
        <div className="bracket">
            <div className="title">single elim bracket generator</div>
            <NumericInput
                min={2}
                max={26}
                value={entriesInput}
                onChange={() => updateEntries(entriesInput)}
            />
            <button onClick={() => renderBracket(true)} className="bracket">
                generate!!!
            </button>
            {showBracket && <Bracket entries={entriesInput} />}
        </div>
    );
}

export default BracketPage; // eslint-disable-line no-unused-vars
