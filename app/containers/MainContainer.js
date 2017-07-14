import React from "react";
import {
  getCampusesFromDatabase,
  getStudentsFromDatabase
} from "../reducers/index.jsx";
import ReactDOM, { render } from "react-dom";
import store from "../store";
import Campuses from "../components/Campuses";
import Students from "../components/Students";
import SingleCampus from "../components/Singlecampus";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

class MainContainer extends React.Component {
  componentDidMount() {
    this.props.getCampusesFromDatabase();
    this.props.getStudentsFromDatabase();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/campuses" component={Campuses} />
            <Route
              exact
              path="/students"
              render={() => <Students students={this.props.students} />}
            />
            <Route
              exact
              path="/campus/:id"
              render={({ match }) =>
                <SingleCampus
                  campuses={[this.props.campuses]}
                  id={match.params.id}
                />}
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
    getStudentsFromDatabase: () => dispatch(getStudentsFromDatabase())
  };
};

export default connect(mapState, mapDispatch)(MainContainer);
