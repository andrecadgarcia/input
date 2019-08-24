import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

const App = props => {
    const styles = {
        container: {
            width: "100%",
            height: "100%",
            display: "flex"
        }
    }
    return (
        <div style={styles.container}>
            S
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));