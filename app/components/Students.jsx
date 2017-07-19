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
        <AddStudent campuses={campuses} />
        <div>
          <table className="table table-inverse table-bordered">
            <thead>
              <tr>
                <th>StudentId</th>
                <th>Name</th>
                <th>Email</th>
                <th>Campus</th>
                <th>Remove Student</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => {
                const campus = campuses.find(
                  item => item.id == student.campusId
                );
                return (
                  <StudentItem
                    key={student.id}
                    student={student}
                    campus={campus}
                  />
                );
              })}
            </tbody>
          </table>
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
