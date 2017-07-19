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
                {student.campusId}
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
        </tbody>
      </table>
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

//  ---WORKING COPY---

// import React from "react";
// import { NavLink } from "react-router-dom";
// import RemoveStudent from "./RemoveStudent";

// const StudentItem = ({ student, campus }) => {
//   return (
//     <table className="table table-inverse table-bordered">
//       <thead>
//         <tr>
//           <th>StudentId</th>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Campus</th>
//           <th>Remove Student</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <th scope="row">
//             {student.id}
//           </th>
//           <td>
//             <NavLink to={`../student/${student.id}`}>
//               {student.name}
//             </NavLink>
//           </td>
//           <td>
//             {student.email}
//           </td>
//           <td>
//             <NavLink to={`../campus/${student.campusId}`}>
//               {student.campusId}
//             </NavLink>
//           </td>
//           <td>
//             <button type="button" className="btn btn-primary">
//               Remove Student
//             </button>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   );
// };

// export default StudentItem;
