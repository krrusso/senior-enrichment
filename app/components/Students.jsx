import React, { Component } from "react";
import StudentItem from "./StudentItem";
import AddStudent from "./AddStudent";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";

class Students extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const students = this.props.students;
    const campuses = this.props.campuses;
    return (
      <div>
        <AddStudent />
        <div>
          {students.map(student => {
            console.log("students in array map", student);
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
    getStudentsFromDatabase: () => dispatch(getStudentsFromDatabase()),
    getCampusesFromDatabase: () => dispatch(getCampusesFromDatabase())
  };
};

export default connect(mapState, mapDispatch)(Students);
