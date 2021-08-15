import React from "react";
import BracketNode from "./BracketNode";
import "./Bracket.scss";


class BracketNodeConstructor {
    // eslint-disable-line no-unused-vars
    id!: number;
    parent!: number;
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

export class Bracket extends React.Component<BracketProps>{ // eslint-disable-line no-unused-vars
    public render(): JSX.Element {
        return (
            <div className="bracket">
                {bracketBuild(this.props.entries).map(function (node, index) {
                    return <BracketNode key={node.id} id={node.id} left={node.left} right={node.right} roundName={node.roundName} leftEntrant={node.leftEntrant} rightEntrant={node.rightEntrant} />
                })}
            </div>
        );
    }
}

export default Bracket; // eslint-disable-line no-unused-vars

const bracketBuild = (entries: number) => {
    let nodesArray = [];
    let nodesNeeded = entries - 1;
    let nodesCreated = 0;
    while (nodesCreated < nodesNeeded) {
        nodesCreated++;
        let node = new BracketNodeConstructor();
        node.id = nodesCreated;
        node.roundName = alphabet[nodesCreated - 1];
        node.parent = (node.id % 2 == 1) ? (nodesCreated - 1) / 2 : nodesCreated / 2;
        node.left =
            nodesNeeded > nodesCreated * 2 - 1 ? nodesCreated * 2 - 1 : null;
        node.right =
            nodesNeeded > nodesCreated * 2 ? nodesCreated * 2 : null;
        nodesArray.push(node);
    }

    return nodesArray;
};

