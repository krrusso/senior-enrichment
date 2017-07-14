import React, { Component } from "react";
import CampusItem from "./CampusItem";

export default class Campuses extends Component {
  constructor(props) {
    super(props);
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
