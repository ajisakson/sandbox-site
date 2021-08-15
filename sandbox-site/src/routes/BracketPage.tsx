import { prependOnceListener } from "process";
import React, { useState } from "react";
import NumericInput from "react-numeric-input";
import Bracket from "./Bracket";

import "./Bracket.scss";

interface BracketState {
    entries: number
}

interface BracketPageProps {
    entries: number
}


export class BracketPage extends React.Component<BracketPageProps, BracketState> {
    // eslint-disable-line no-unused-vars

    // const [showBracket, updateBracket] = useState(false);
    constructor(props: BracketPageProps) {
        super(props)
        this.state = {entries: 4}
    }

    public render(): JSX.Element {
        return (
            <div className="bracket_page">
                <div className="title">single elim bracket generator</div>
                <NumericInput
                    min={2}
                    max={26}
                    value={this.state.entries}
                    onChange={value => (value != null ? this.setState({entries: value}) : this.setState({entries: 0}))}
                />
                <Bracket entries={this.state.entries} />
            </div>
        );
    }
}

export default BracketPage; // eslint-disable-line no-unused-vars
