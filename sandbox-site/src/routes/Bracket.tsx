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

function Bracket({entries}: BracketProps) { // eslint-disable-line no-unused-vars
    return (
        <div className="bracket">
            {bracketBuild(entries).map(function (node, index) {
                return (<div key={index}>{node.roundName}</div>);
            })}
        </div>
    );
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
    let nodesNeeded = entries;
    let nodesCreated = 0;
    while (nodesCreated < nodesNeeded) {
        nodesCreated++;
        let node = new BracketNode();
        node.roundName = alphabet[nodesCreated - 1];
        node.left =
            nodesNeeded > nodesCreated * 2 ? alphabet[nodesCreated * 2 - 1] : null;
        node.right =
            nodesNeeded > nodesCreated * 2 + 1 ? alphabet[nodesCreated * 2] : null;
        nodesArray.push(node);
    }

    return nodesArray;
};
