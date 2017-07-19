import axios from "axios";

//  INITIAL STATE

/* -----------------    ACTIONS     ------------------ */

const GET_STUDENTS = "GET_STUDENTS";
const ADD_STUDENT = "ADD_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT";

/* ------------   ACTION CREATORS     ------------------ */
export const getStudents = students => {
  return {
    type: GET_STUDENTS,
    students
  };
};

export const addStudent = student => {
  return {
    type: ADD_STUDENT,
    student
  };
};

export const deleteStudent = student => {
  return {
    type: DELETE_STUDENT,
    student
  };
};

/* ------------       REDUCER     ------------------ */

export default function studentReducer(state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return [...state, ...action.students];
    case ADD_STUDENT:
      return [...state, action.student];
    case DELETE_STUDENT:
      return state.filter(student => {
        return student.id !== action.student;
      });
    default:
      return state;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const getStudentsFromDatabase = () => {
  return function(dispatch) {
    axios
      .get("api/students")
      .then(res => res.data)
      .then(students => {
        dispatch(getStudents(students));
      })
      .catch(console.error.bind(console));
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

export const deleteStudentFromDatabase = id => {
  return function(dispatch) {
    dispatch(deleteStudent(id));
    axios.delete(`/api/students/${id}`, id).catch(console.error.bind(console));
  };
};
