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
