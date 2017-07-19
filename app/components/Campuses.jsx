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
        <AddCampus campuses={campuses} />
        <div className="row">
          {campuses.map(campus =>
            <div key={campus.id} className="col-md-4">
              <CampusItem campus={campus} />
            </div>
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

{
  /* <div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4">.col-md-4</div>
</div>; */
}
