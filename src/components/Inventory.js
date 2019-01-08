import React from "react";
import AddAppleForm from "./AddAppleForm";

class Inventory extends React.Component {
    render() {
        return (
            <div className="inventory">
                <h2>Inventory!</h2>
                <AddAppleForm addApple={this.props.addApple} />
                <button onClick={this.props.loadSampleApples}>
                    Load Sample Apples
                </button>
            </div>
        );
    }
}

export default Inventory;