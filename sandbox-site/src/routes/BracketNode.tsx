import { stringify } from "querystring";
import React from "react";
import "./Bracket.scss";

type BracketProps = {
    id: number,
    left: number,
    right: number,
    roundName: string,
    leftEntrant: string,
    rightEntrant: string
}

type BracketState = {

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

export class BracketNode extends React.Component<BracketProps>{ // eslint-disable-line no-unused-vars
    constructor(props: BracketProps) {
        super(props);
        this.state = {
            winner: '',
            leftEntrant: props.leftEntrant,
            rightEntrant: props.rightEntrant
        }
    }
    
    
    public render(): JSX.Element {
        // let leftEntrant = this.state.leftEntrant;
        // let rightEntrant = this.state.rightEntrant;
        return (
            <div key={this.props.id} className="bracket_node">
                <div className="title">{this.props.roundName}</div>
                <div className="input_wrapper">
                    {this.props.leftEntrant === '' ? <input onChange={(e)=> this.handleInput("left", e) }/> : <div>{ this.props.leftEntrant }</div>}
                    <button className="entrant_win_button" onClick={ ()=> this.leftWin(this.props) }>Winner</button>
                </div>
                <div className="node_seed">{this.props.left ? `Winner of ${ alphabet[this.props.left] }` : ' '}</div>

                <div className="input_wrapper">
                    {this.props.rightEntrant === '' ? <input onChange={(e)=> this.handleInput("right", e) }/> : <div>{ this.props.rightEntrant }</div>}
                    <button className="entrant_win_button" onClick= { ()=> this.rightWin(this.props) }>Winner</button>
                </div>
                <div className="node_seed">{this.props.right ? `Winner of ${ alphabet[this.props.right] }` : ' '}</div>
            </div>);
    }
    
    handleInput = (side: string, e: React.FormEvent<HTMLInputElement>) => {
        switch(side){
            case "left":
                this.setState({ leftEntrant: e.currentTarget.value !== null ? e.currentTarget.value : ""})
                break;
            case "right":
                this.setState({ rightEntrant: e.currentTarget.value !== null ? e.currentTarget.value : ""})
                break;
        }
    }

    leftWin = (node: BracketProps) => {
        this.setState({winner: node.leftEntrant});
        // node.parent
        
        // if node where parent id == node.parent 
        // if this.node.id == parentNode.left { update node.leftEntrant to this.node.leftEntrant }
        // else if this.node.id == parentNode.right { update node.leftEntrant to this.node.rightEntrant }
    }

    rightWin = (node: BracketProps) => {
        this.setState({winner: node.rightEntrant});
        // node.parent
    
        // if node where parent id == node.parent 
        // if this.node.id == parentNode.right { update node.rightEntrant to this.node.rightEntrant }
        // else if this.node.id == parentNode.left { update node.leftEntrant to this.node.rightEntrant }
    }
}

export default BracketNode; // eslint-disable-line no-unused-vars

