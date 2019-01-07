import React from "react";
import AddAppleForm from "./AddAppleForm";

class Inventory extends React.Component {
    render() {
        return (
            <div className="inventory">
                <h2>Inventory!</h2>
                <AddAppleForm addApple={this.props.addApple} />
            </div>
        );
    }
}

export default Inventory;