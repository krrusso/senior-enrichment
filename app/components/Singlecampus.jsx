import React from "react";

const SingleCampus = ({ campuses, id, students }) => {
  const selectedCampus = campuses[0].find(campus => campus.id === +id);

  if (!selectedCampus) return <p>Loading...</p>;
  const enrolledStudents = students[0].filter(student => {
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
      <ul>
        {enrolledStudents.map(student =>
          <li key={student.id}>
            {student.name}
          </li>
        )}
        {/* {console.log("ENROLLED", enrolledStudents)} */}
      </ul>
    </div>
  );
};

export default SingleCampus;

// {students.filter(student => {
//   return <li key={student.id}>(student.campusId === +id)</li>;
// })}

// <li key={student.id}>
//   {student.name}
// </li>
