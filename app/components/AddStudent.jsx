import React, { Component } from "react";
import { connect } from "react-redux";
import { createNewStudent } from "../reducers";

class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      campusId: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const student = {
      name: event.target.studentName.value,
      email: event.target.emailName.value,
      campusId: +event.target.campusName.value
    };
    this.props.makeNewStudent(student);

    // clear the inputs
    event.target.studentName.value = "";
    event.target.emailName.value = "";
    event.target.campusName.value = "";
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Create a Student</label>
          <input
            onChange={evt => this.setState({ name: evt.target.value })}
            className="form-control"
            type="text"
            name="studentName"
            placeholder="Enter Student name"
          />
        </div>
        <div className="form-group">
          <select
            className="custom-select"
            name="campusName"
            onChange={evt => this.setState({ campusId: evt.target.value })}
          >
            <option defaultValue>Chose a Campus</option>
            <option value="1">1</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            onChange={evt => this.setState({ email: evt.target.value })}
            className="form-control"
            type="text"
            name="emailName"
            placeholder="Enter Student email address"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-default">
            Create Student
          </button>
        </div>
      </form>
    );
  }
}

// <select onChange={event => props.submitAnimal(event.target.value)}>
//   {animals.map(animal => {
//     return (
//       <option key={animal}>
//         {animal}
//       </option>
//     );
//   })}
// </select>

const mapStateToProps = state => {
  return {
    newStudentEntry: state.newStudentEntry
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  makeNewStudent: student => {
    dispatch(createNewStudent(student));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);
