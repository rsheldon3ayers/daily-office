import React, { Component, } from "react";
import Paper from "material-ui/Paper";



class Office extends Component {
    render() {
      
        const style = {
            height: 1200,
            width: 900,
            margin: 20,
            textAlign: "left",
            display: "inline-block",
        };

        const PaperExampleSimple = () => (
  <div>
    <Paper style={style} zDepth={3}>
        <h1>Daily Evening Prayer</h1>
        <p className="paragraph">
            Dearly beloved, the Scriptures teach us to acknowledge our many sins and offenses, not concealing them from our heavenly Father, but confessing them with humble and obedient hearts that we may obtain forgiveness by his infinite goodness and mercy. We ought at all times humbly to acknowledge our sins before Almighty God, but especially when we come together in his presence to give thanks for the great benefits we have received at his hands, to declare his most worthy praise, to hear his holy Word, and to ask, for ourselves and others, those things necessary for our life and our salvation. Therefore, come with me to the throne of heavenly grace.
       </p> 
    </Paper>
  </div>
);
        return (
        <PaperExampleSimple />
        );
    }
}
export default Office;