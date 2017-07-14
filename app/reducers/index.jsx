import { combineReducers } from "redux";
import axios from "axios";

//initial state
const initialState = {
  campuses: [],
  students: []
};

//ACTION TYPES
const GET_CAMPUSES = "GET_CAMPUSES";
const ADD_CAMPUS = "ADD_CAMPUS";
const GET_STUDENTS = "GET_STUDENTS";
const ADD_STUDENT = "ADD_STUDENT";

//action creators
const getCampuses = campuses => {
  return {
    type: GET_CAMPUSES,
    campuses
  };
};

const addCampus = campus => {
  return {
    type: ADD_CAMPUS,
    campus
  };
};

const getStudents = students => {
  return {
    type: GET_STUDENTS,
    students
  };
};

const addStudent = student => {
  return {
    type: ADD_STUDENT,
    student
  };
};

//Thunks

export const getCampusesFromDatabase = () => {
  return function(dispatch) {
    return axios
      .get("/api/campuses")
      .then(res => res.data)
      .then(campuses => {
        dispatch(getCampuses(campuses));
      })
      .catch(console.error.bind(console));
  };
};

export const createNewCampus = campus => {
  return function(dispatch) {
    axios
      .post("/api/campuses", campus)
      .then(res => res.data)
      .then(newCampus => {
        dispatch(addCampus(newCampus));
      })
      .catch(console.error.bind(console));
  };
};

export const getStudentsFromDatabase = () => {
  return function(dispatch) {
    console.log("-=-=-=-=-=-=get students");
    axios.get("api/students").then(res => res.data).then(students => {
      dispatch(getStudents(students));
    });
  };
};

export const createNewStudent = student => {
  return function(dispatch) {
    axios
      .post("api/students")
      .then(res => res.data)
      .then(newStudent => {
        dispatch(addStudent(newStudent));
      })
      .catch(console.error.bind(console));
  };
};

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return Object.assign({}, state, { campuses: action.campuses });
    case ADD_CAMPUS:
      return Object.assign({}, state, {
        campuses: [...state.campuses, action.campuses]
      });
    case GET_STUDENTS:
      return Object.assign({}, state, { students: action.students });
    case ADD_STUDENT:
      return Object.assign({}, state, {
        students: [...state.students, action.students]
      });
    default:
      return state;
  }
}
