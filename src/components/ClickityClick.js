// Code ClickityClick Component Here
import React, { Component } from 'react';

class ClickityClick extends Component {
    constructor(){
        super();
        this.state = {
            toggled: false,
        }
    }
handleClick = () => {
    this.setState((previousState) => {
        return {
            toggled: !previousState.toggled,
        };
    });
}
// handleClick = () => {
//     this.setState({
//             toggled: !this.state.toggled,
//     });
//     console.log(this.state.toggled)
// }

    render() { 
        return (
            <div>
                <p>I have {this.state.toggled ? null : "not"} been clicked!</p>
                <button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
            </div>
        );
    }
}
 
export default ClickityClick;