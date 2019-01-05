import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class App extends React.Component {
    render() {
        return (
            <div className="lucky-apples">
                <div className="options">
                    <Header tagline="An Apple A Day, Because Why Not!" />
                </div>
                <Inventory />
                <Order />
            </div>
        );
    }
}

export default App;