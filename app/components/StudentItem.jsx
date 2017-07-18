import React from "react";
import { NavLink } from "react-router-dom";

const StudentItem = ({ student, campus }) => {
  return (
    <table className="table table-inverse">
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
            <button type="button" className="btn btn-primary">
              Remove Student
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default StudentItem;

//  ---WORKING COPY---

// const StudentItem = ({ student, campus }) => {
//   return (
//     <div>
//       <NavLink to={`../student/${student.id}`} className="col s4">
//         <h1>
//           {student.name}
//         </h1>
//       </NavLink>
//       <NavLink to={`../campus/${student.campusId}`} className="col s4">
//         <h4>
//           {" "}{campus.name}
//         </h4>
//       </NavLink>
//       <p className="student-label">
//         <small>
//           {student.email}
//         </small>
//       </p>
//       <br />
//     </div>
//   );
// };
