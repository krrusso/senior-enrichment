import React, { Component } from "react";
import StudentItem from "./StudentItem";
import { connect } from "react-redux";

class Students extends Component {
  constructor() {
    super();
  }

  render() {
    const students = this.props.students;
    const campuses = this.props.campuses;
    return (
      <div>
        <h1>This is the student Page</h1>
        <div>
          {students.map(student => {
            const campus = campuses.find(item => item.id == student.campusId);
            return (
              <StudentItem key={student.id} student={student} campus={campus} />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    campuses: state.campuses,
    students: state.students
  };
};

const mapDispatch = dispatch => {
  return {
    getStudentsFromDatabase: () => dispatch(getStudentsFromDatabase())
  };
};

export default connect(mapState, mapDispatch)(Students);
