import React, { Component } from "react";
import { connect } from "react-redux";
import { createNewCampus } from "../reducers";

class AddCampus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const campus = {
      name: event.target.campusName.value,
      image: event.target.imageName.value
    };
    this.props.makeNewCampus(campus);

    // clear the inputs after submit (except the selector)
    event.target.campusName.value = "";
    event.target.imageName.value = "";
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Create a Campus</label>
          <input
            onChange={evt => this.setState({ name: evt.target.value })}
            className="form-control"
            type="text"
            name="campusName"
            placeholder="Enter Campus name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image Url</label>
          <input
            onChange={evt => this.setState({ image: evt.target.value })}
            className="form-control"
            type="text"
            name="imageName"
            placeholder="Enter an image Url"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-default">
            Create Campus
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    campuses: state.campuses
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  makeNewCampus: campus => {
    dispatch(createNewCampus(campus));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCampus);
