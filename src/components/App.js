import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class App extends React.Component {
    state = {
        apples: {},
        order: {}
    };
    addApple = (apple) => {
        // 1. Take a copy of the existing state to prevent mutation
        const apples = { ...this.state.apples };
        // 2. Add a new apple to the apples object
        apples[`apple${Date.now()}`] = apple;
        // 3. Set the new apples object to state
        this.setState({ 
            apples: apples
        });
    };
    render() {
        return (
            <div className="lucky-apples">
                <div className="options">
                    <Header tagline="An Apple A Day, Because Why Not!" />
                </div>
                <Inventory addApple={this.addApple} />
                <Order />
            </div>
        );
    }
}

export default App;