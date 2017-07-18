import React, { Component } from "react";
import { connect } from "react-redux";
import { writeChannelName, createNewStudent } from "../store";

function AddStudent(props) {
  const { newStudentEntry, handleSubmit, handleChange } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Student</label>
        <input
          value={newStudentEntry}
          onChange={handleChange}
          className="form-control"
          type="text"
          name="channelName"
          placeholder="Enter Student name"
        />
      </div>
      <div className="form-group">
        <select class="custom-select">
          <option selected>Chose a Campus</option>
          <option value="1">One</option>
          <option value="2">Two</option>
        </select>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">
          Create Student
        </button>
      </div>
    </form>
  );
}

//   SELECT OPTION FOR SELECTING A CAMPUS
//  <select class="custom-select">
//   <option selected>Open this select menu</option>
//   <option value="1">One</option>
//   <option value="2">Two</option>
//   <option value="3">Three</option>
// </select>

// const mapStateToProps = function(state) {
//   return {
//     newChannelEntry: state.newChannelEntry
//   };
// };

// const mapDispatchToProps = function(dispatch, ownProps) {
//   return {
//     handleChange(evt) {
//       dispatch(writeChannelName(evt.target.value));
//     },
//     handleSubmit(evt) {
//       evt.preventDefault();
//       const name = evt.target.channelName.value;
//       dispatch(postChannel({ name }, ownProps.history));
//       dispatch(writeChannelName(""));
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);
