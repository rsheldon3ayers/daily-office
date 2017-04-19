import React, { Component, } from "react";
import  MuiThemeProvider  from "material-ui/styles/MuiThemeProvider";
import App from "./App.js";
import Office from "./Office.js";

class Main extends Component {
    render() {
        
        return (
            <div>
                <App />
                <MuiThemeProvider>
                    <Office />
                </MuiThemeProvider>
            </div>
        );
    }
}
export default Main;