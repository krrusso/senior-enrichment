import React from "react";
import { NavLink } from "react-router-dom";

const CampusItem = ({ campus }) => {
  return (
    <NavLink to={`../campus/${campus.id}`} className="col s4">
      <h2 className="campus-label">
        {campus.name}:
      </h2>
      <img className="campus-img" src={campus.image} alt={campus.name} />
    </NavLink>
  );
};

export default CampusItem;
