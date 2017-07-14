import React, { Component } from "react";
import CampusItem from "./CampusItem";

export default class Campuses extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>This is the Campus Page</h1>
        <div>
          {console.log(this)}
          {this.props.map(campus =>
            <CampusItem key={campus.id} campus={campus} />
          )}
        </div>
      </div>
    );
  }
}
