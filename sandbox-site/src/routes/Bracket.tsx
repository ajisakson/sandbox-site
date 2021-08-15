import React from "react";
import "./Bracket.scss";

class BracketNode {
    // eslint-disable-line no-unused-vars
    roundName!: string;
    left!: any;
    right!: any;
    leftEntrant: string;
    rightEntrant: string;

    constructor() {
        this.roundName = "";
        this.left = null;
        this.right = null;
        this.leftEntrant = "";
        this.rightEntrant = "";
    }
}

type BracketProps = {
    entries: number
}

export class Bracket extends React.Component<BracketProps>{ // eslint-disable-line no-unused-vars
    public render(): JSX.Element {
        return (
            <div className="bracket">
                {bracketBuild(this.props.entries).map(function (node, index) {
                    return (
                    <div key={index} className="bracket_node">
                        <div className="title">{node.roundName}</div>
                        <input />
                        <div className="node_seed">{node.left ? `Winner of ${node.left}` : ' '}</div>
                        <input />
                        <div className="node_seed">{node.right ? `Winner of ${node.right}` : ' '}</div>
                    </div>);
                })}
            </div>
        );
    }
}

export default Bracket; // eslint-disable-line no-unused-vars

const bracketBuild = (entries: number) => {
    const alphabet = [
        "Grand Finals",
        "Semifinal A",
        "Semifinal B",
        "Quarterfinal A",
        "Quarterfinal B",
        "Quarterfinal C",
        "Quarterfinal D",
        "Play-in A",
        "Play-in B",
        "Play-in C",
        "Play-in D",
        "Play-in E",
        "Play-in F",
        "Play-in G",
        "Play-in H",
        "Play-in I",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];
    let nodesArray = [];
    let nodesNeeded = entries - 1;
    let nodesCreated = 0;
    while (nodesCreated < nodesNeeded) {
        nodesCreated++;
        let node = new BracketNode();
        node.roundName = alphabet[nodesCreated - 1];
        node.left =
            nodesNeeded > nodesCreated * 2 - 1 ? alphabet[nodesCreated * 2 - 1] : null;
        node.right =
            nodesNeeded > nodesCreated * 2 ? alphabet[nodesCreated * 2] : null;
        nodesArray.push(node);
    }

    return nodesArray;
};

