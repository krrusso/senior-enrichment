import React, { Component } from "react";
import CampusItem from "./CampusItem";
import { connect } from "react-redux";

class Campuses extends Component {
  constructor() {
    super();
  }

  render() {
    const campuses = this.props.campuses;
    console.log("props on campuses---=-=-=-==", this.props);
    return (
      <div>
        <h1>This is the Campus Page</h1>
        <div>
          {campuses.map(campus =>
            <CampusItem key={campus.id} campus={campus} />
          )}
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    campuses: state.campuses
  };
};

const mapDispatch = dispatch => {
  return {
    getCampusesFromDatabase: () => dispatch(getCampusesFromDatabase())
  };
};

export default connect(mapState, mapDispatch)(Campuses);
