import React from "react";
import { Link } from "react-router-dom";
import Singlecampus from "./Singlecampus";

const CampusItem = ({ campus }) => {
  return (
    <Link to={`../campus/${campus.id}`} className="col s4">
      <img className="campus-img" src={campus.image} alt={campus.name} />
      <p className="campus-label">
        {campus.name}:
        <br />
      </p>
    </Link>
  );
};

export default CampusItem;
