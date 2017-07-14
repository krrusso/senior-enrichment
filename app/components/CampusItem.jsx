import React from "react";
import { Link } from "react-router-dom";

const CampusItem = ({ campuses }) => {
  return (
    <Link to={`../campus/${campus.id}`} className="col s4">
      <img className="campus-img" src={campus.img} alt={campus.name} />
      <p className="campus-label">
        {campus.name}:
        <br />
        <small>{campus.students.length}</small>
      </p>
    </Link>
  );
};

export default CampusItem;
