import React from "react";
import { NavLink } from "react-router-dom";

const CampusItem = ({ campus }) => {
  return (
    <NavLink to={`../campus/${campus.id}`} className="col s4">
      <img className="campus-img" src={campus.image} alt={campus.name} />
      <p className="campus-label">
        {campus.name}:
        <br />
      </p>
    </NavLink>
  );
};

export default CampusItem;
