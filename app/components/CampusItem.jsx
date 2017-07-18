import React from "react";
import { NavLink } from "react-router-dom";

const CampusItem = ({ campus }) => {
  return (
    <div>
      <NavLink to={`../campus/${campus.id}`} className="col s4">
        <h2 className="campus-label">
          {campus.name}:
        </h2>
        <img className="campus-img" src={campus.image} alt={campus.name} />
      </NavLink>
      <button type="button" className="btn btn-danger">
        Delete Campus
      </button>
    </div>
  );
};

export default CampusItem;
