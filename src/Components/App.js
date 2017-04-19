import React, { Component, } from "react";
import {grey900,} from "material-ui/styles/colors";
import  MuiThemeProvider  from "material-ui/styles/MuiThemeProvider";
import  { getMuiTheme, } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import injectTapEventPlugin from "react-tap-event-plugin";


class App extends Component {

    render() {
        // needed to make TouchTap event work on the nav drawer
        injectTapEventPlugin();
        // sets the thime for the appBar
        const muiTheme = getMuiTheme({
            palette: {
                textColor: grey900,
        
            }, 
            appBar: {
                color: grey900,
                height: 50,
                titleStyle: {textAlign: "center",},    
            },
        });
        const Nav = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar title="Daily Office" />
  </MuiThemeProvider>
    );
        return (  
      <Nav />
        );
    }
}

export default App;
