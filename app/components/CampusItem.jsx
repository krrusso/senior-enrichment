import React from "react";
import { Link } from "react-router-dom";

const CampusItem = ({ campus }) => {
  return (
    <Link to={`../campus/${campus.id}`} className="col s4">
      {console.log("-=-=-=-=-=-=campus stuff", campus)}
      <img className="campus-img" src={campus.image} alt={campus.name} />
      <p className="campus-label">
        {campus.name}:
        <br />
        {/* <small>{campus}</small> */}
      </p>
    </Link>
  );
};

export default CampusItem;
