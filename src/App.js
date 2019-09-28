import React from "react";
import { connect } from "react-redux";
import { activateGeod, closeGeod } from "./redux";

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.geod.title || "Hello World !"}</h1>

        {this.props.geod.title ? (
          <button onClick={this.props.closeGeod}>remove state</button>
        ) : (
          <button
            onClick={() =>
              this.props.activateGeod({ title: "this is from state" })
            }
          >
            Change to State
          </button>
        )}
      </div>
    );
  }
}

//Appcontainer.js
const mapStateToProps = state => ({
  geod: state.geod
});

const mapDispatchToProps = {
  activateGeod,
  closeGeod
};

const Appcontainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default Appcontainer;
