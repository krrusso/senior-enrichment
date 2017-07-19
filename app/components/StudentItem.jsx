import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { deleteStudentFromDatabase } from "../reducers";

class StudentItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
  }

  handleDeleteSubmit(event) {
    const { deleteStudentFromDatabase, student, campus } = this.props;
    deleteStudentFromDatabase(student.id);
  }

  render() {
    const { student, campus } = this.props;
    return (
      <tr>
        <th scope="row">
          {student.id}
        </th>
        <td>
          <NavLink to={`../student/${student.id}`}>
            {student.name}
          </NavLink>
        </td>
        <td>
          {student.email}
        </td>
        <td>
          <NavLink to={`../campus/${student.campusId}`}>
            {campus.name}
          </NavLink>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleDeleteSubmit}
          >
            Remove Student
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (student, campus) => (student, campus);

const mapDispatchToProps = dispatch => {
  return {
    deleteStudentFromDatabase: id => dispatch(deleteStudentFromDatabase(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentItem);
