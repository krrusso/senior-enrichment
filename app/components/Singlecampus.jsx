import React from "react";

const SingleCampus = ({ campuses, id }) => {
  const selectedCampus = campuses.find(campus => campus.id === +id);
  if (!selectedCampus) return null;

  const { name, image } = selectedCampus;

  return (
    <div className="row">
      {console.log(name + "--------=========" + this.props)}
      <h4>
        {name}
      </h4>
      <br />
      <div className="col s4 offset-s4">
        <img className="campus-img" src={image} alt={name} />
        <p className="campus-label">
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default SingleCampus;
