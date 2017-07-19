import React from "react";

const SingleCampus = ({ campuses, id, students }) => {
  const selectedCampus = campuses.find(campus => campus.id === +id);
  if (!selectedCampus) return <h1>This student is unassigned...</h1>;

  const enrolledStudents = students.filter(student => {
    return student.campusId === +id;
  });

  return (
    <div>
      <h1>This is the Single Campus Page</h1>
      <h3>
        {selectedCampus.name}
      </h3>
      <div className="col s4 offset-s4">
        <img
          className="campus-img"
          src={selectedCampus.image}
          alt={selectedCampus.name}
        />
      </div>
      <br />
      <h4>ENROLLED STUDENTS</h4>
      <ul className="list-group">
        {enrolledStudents.map(student =>
          <li className="list-group-item" key={student.id}>
            {student.name}
          </li>
        )}
      </ul>
    </div>
  );
};

export default SingleCampus;
