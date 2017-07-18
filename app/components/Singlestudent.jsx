import React from "react";

const SingleStudent = ({ students, id }) => {
  const selectedStudent = students.find(student => student.id === +id);

  if (!selectedStudent) return <p>Loading...</p>;
  return (
    <div>
      <h1>This is the Single Student Page</h1>
      <h2>
        {selectedStudent.name}
      </h2>
      <br />
      <h3>
        {selectedStudent.email}
      </h3>
    </div>
  );
};

export default SingleStudent;
