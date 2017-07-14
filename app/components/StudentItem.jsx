import React from "react";
import { Link } from "react-router-dom";

const StudentItem = ({ student, campus }) => {
  return (
    <div>
      <Link to={`../student/${student.id}`} className="col s4">
        <h1>
          {student.name}
        </h1>
      </Link>
      <Link to={`../campus/${student.campusId}`} className="col s4">
        <h4>
          {" "}{campus.name}
        </h4>
      </Link>
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
