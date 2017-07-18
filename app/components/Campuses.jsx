import React, { Component } from "react";
import CampusItem from "./CampusItem";
import AddCampus from "./AddCampus";
import { connect } from "react-redux";

class Campuses extends Component {
  constructor() {
    super();
  }

  render() {
    const campuses = this.props.campuses;
    return (
      <div>
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
