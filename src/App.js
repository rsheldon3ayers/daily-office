import React, { Component, } from "react";
import "./App.css";
import {cyan500,} from "material-ui/styles/colors";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import AppBar from "material-ui/AppBar";
// import getPassages from "../helpers/api.js";


class App extends Component {

    render() {

        const muiTheme = getMuiTheme({
            palette: {
                textColor: cyan500,
            },
            appBar: {
                height: 50,
            },
        });
            
        const Main = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar title="Daily Office" />
  </MuiThemeProvider>
);
        return (
      <Main />
        );
    }
}

export default App;
