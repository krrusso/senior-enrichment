import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { deleteCampusFromDatabase } from "../reducers/campusReducer";

class CampusItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
  }

  handleDeleteSubmit(event) {
    const { deleteCampusFromDatabase, campus } = this.props;
    deleteCampusFromDatabase(campus.id);
  }

  render() {
    const { campus } = this.props;
    return (
      <div>
        <NavLink to={`../campus/${campus.id}`} className="col s4">
          <h2 className="campus-label">
            {campus.name}:
          </h2>
          <img className="campus-img" src={campus.image} alt={campus.name} />
        </NavLink>
        <button
          type="button"
          className="btn btn-danger"
          onClick={this.handleDeleteSubmit}
        >
          Delete Campus
        </button>
      </div>
    );
  }
}

const mapStateToProps = campus => campus;

const mapDispatchToProps = dispatch => {
  return {
    deleteCampusFromDatabase: id => dispatch(deleteCampusFromDatabase(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CampusItem);
