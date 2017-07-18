import React from "react";

const SingleCampus = ({ campuses, id }) => {
  const selectedCampus = campuses[0].find(campus => campus.id === +id);

  console.log(campuses[0]);

  console.log("THE ID ON THE PROPS IS          ", id);

  if (!selectedCampus) return <p>Loading...</p>;
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
    </div>
  );
};

export default SingleCampus;
