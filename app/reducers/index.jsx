import { combineReducers } from "redux";
import axios from "axios";

//  INITIAL STATE
const initialState = {
  campuses: [],
  students: []
};

//  ACTION TYPES
const GET_CAMPUSES = "GET_CAMPUSES";
const ADD_CAMPUS = "ADD_CAMPUS";
const DELETE_CAMPUS = "DELETE_CAMPUS";
const GET_STUDENTS = "GET_STUDENTS";
const ADD_STUDENT = "ADD_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT";

//  ACTION CREATORS
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

const deleteStudent = student => {
  return {
    type: DELETE_STUDENT,
    student
  };
};

const deleteCampus = campus => {
  return {
    type: DELETE_CAMPUS,
    campus
  };
};

//  THUNKS

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
    axios.get("api/students").then(res => res.data).then(students => {
      dispatch(getStudents(students));
    });
  };
};

export const createNewStudent = student => {
  return function(dispatch) {
    axios
      .post("api/students", student)
      .then(res => res.data)
      .then(newStudent => {
        dispatch(addStudent(newStudent));
      })
      .catch(console.error.bind(console));
  };
};

export const deleteCampusFromDatabase = id => {
  return function(dispatch) {
    dispatch(deleteCampus(id));
    axios.delete(`/api/campuses/${id}`, id).catch(console.error.bind(console));
  };
};

export const deleteStudentFromDatabase = id => {
  return function(dispatch) {
    dispatch(deleteStudent(id));
    axios.delete(`/api/students/${id}`, id).catch(console.error.bind(console));
  };
};

//  From Auther
// export const removeUser = id => dispatch => {
//   dispatch(remove(id));
//   axios.delete(`/api/users/${id}`)
//        .catch(err => console.error(`Removing user: ${id} unsuccesful`, err));
// };

//  --REDUCER
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return Object.assign({}, state, { campuses: action.campuses });
    case ADD_CAMPUS:
      return Object.assign({}, state, {
        campuses: [...state.campuses, action.campus]
      });
    case GET_STUDENTS:
      return Object.assign({}, state, { students: action.students });
    case ADD_STUDENT:
      return Object.assign({}, state, {
        students: [...state.students, action.student]
      });
    case DELETE_STUDENT:
      return Object.assign({}, state, {
        students: state.students.filter(student => {
          return student.id !== action.student;
        })
      });
    case DELETE_CAMPUS:
      return Object.assign({}, state, {
        campuses: state.campuses.filter(campus => {
          return campus.id !== action.campus;
        })
      });
    default:
      return state;
  }
}

//  FROM AUTHER
// case REMOVE:
//   return users.filter(user => user.id !== action.id);
