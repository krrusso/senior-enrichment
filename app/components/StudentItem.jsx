import React from "react";
import { NavLink } from "react-router-dom";

const StudentItem = ({ student, campus }) => {
  return (
    <div>
      <NavLink to={`../student/${student.id}`} className="col s4">
        <h1>
          {student.name}
        </h1>
      </NavLink>
      <NavLink to={`../campus/${student.campusId}`} className="col s4">
        <h4>
          {" "}{campus.name}
        </h4>
      </NavLink>
      <p className="student-label">
        <small>
          {student.email}
        </small>
      </p>
      <br />
    </div>
  );
};

export default StudentItem;
