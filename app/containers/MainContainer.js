import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { getCampusesFromDatabase } from "../reducers/campusReducer.jsx";
import { getStudentsFromDatabase } from "../reducers/studentReducer.jsx";
import ReactDOM, { render } from "react-dom";
import store from "../store";
import Campuses from "../components/Campuses";
import Students from "../components/Students";
import SingleCampus from "../components/SingleCampus";
import SingleStudent from "../components/SingleStudent";
import Homepage from "../components/Homepage";
import Navbar from "../components/Navbar";

class MainContainer extends React.Component {
  componentDidMount() {
    this.props.getCampusesFromDatabase();
    this.props.getStudentsFromDatabase();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" render={() => <Homepage />} />
            <Route
              path="/campuses"
              render={() => <Campuses campuses={this.props.campuses} />}
            />
            <Route
              path="/students"
              render={() => <Students students={this.props.students} />}
            />
            <Route
              path="/campus/:id"
              render={({ match }) => {
                return (
                  <SingleCampus
                    campuses={this.props.campuses}
                    students={this.props.students}
                    id={match.params.id}
                  />
                );
              }}
            />
            <Route
              path="/student/:id"
              render={({ match }) => {
                return (
                  <SingleStudent
                    students={this.props.students}
                    campuses={this.props.campuses}
                    id={match.params.id}
                  />
                );
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapState = state => {
  return {
    campuses: state.campuses,
    students: state.students
  };
};

const mapDispatch = dispatch => {
  return {
    getCampusesFromDatabase: () => dispatch(getCampusesFromDatabase()),
    getStudentsFromDatabase: () => dispatch(getStudentsFromDatabase()),
    createNewCampus: campus => dispatch(createNewCampus(campus)),
    deleteCampusFromDatabase: campusToDelete =>
      dispatch(deleteCampusFromDatabase(campusToDelete)),
    deleteStudentFromDatabase: studentToDelete =>
      dispatch(deleteStudentFromDatabase)
  };
};

export default connect(mapState, mapDispatch)(MainContainer);
