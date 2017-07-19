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

export const deleteCampusFromDatabase = campus => {
  return function(dispatch) {
    axios
      .delete("/api/campuses", campus)
      .then(res => res.data)
      .then(campus => {
        dispatch(deleteCampus(campus));
      })
      .catch(console.error.bind(console));
  };
};

export const deleteStudentFromDatabase = student => {
  return function(dispatch) {
    axios
      .delete("/api/students", student)
      .then(res => res.data)
      .then(student => {
        dispatch(deleteStudent(student));
      })
      .catch(console.error.bind(console));
  };
};

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
    default:
      return state;
  }
}

// // ACTION TYPES

// const WRITE_CHANNEL_NAME = 'WRITE_CHANNEL_NAME';

// // ACTION CREATORS

// export function writeChannelName (channelName) {
//   const action = { type: WRITE_CHANNEL_NAME, channelName };
//   return action;
// }

// // REDUCER
// export default function reducer (state = '', action) {

//   switch (action.type) {

//     case WRITE_CHANNEL_NAME:
//       return action.channelName;

//     default:
//       return state;
//   }

// }

// export function postChannel (channel, history) {

//   return function thunk (dispatch) {
//     return axios.post('/api/channels', channel)
//       .then(res => res.data)
//       .then(newChannel => {
//         dispatch(getChannel(newChannel));
//         socket.emit('new-channel', newChannel);
//         history.push(`/channels/${newChannel.id}`);
//       });
//   };
// }
