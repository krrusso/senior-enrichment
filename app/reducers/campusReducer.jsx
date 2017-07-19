import axios from "axios";

//  INITIAL STATE

/* -----------------    ACTIONS     ------------------ */

const GET_CAMPUSES = "GET_CAMPUSES";
const ADD_CAMPUS = "ADD_CAMPUS";
const DELETE_CAMPUS = "DELETE_CAMPUS";

/* ------------   ACTION CREATORS     ------------------ */
export const getCampuses = campuses => {
  return {
    type: GET_CAMPUSES,
    campuses
  };
};

export const addCampus = campus => {
  return {
    type: ADD_CAMPUS,
    campus
  };
};

export const deleteCampus = campus => {
  return {
    type: DELETE_CAMPUS,
    campus
  };
};

/* ------------       REDUCER     ------------------ */

export default function campusReducer(state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return [...state, ...action.campuses];
    case ADD_CAMPUS:
      return [...state, action.campus];
    case DELETE_CAMPUS:
      return state.filter(campus => {
        return campus.id !== action.campus;
      });

    default:
      return state;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

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

export const deleteCampusFromDatabase = id => {
  return function(dispatch) {
    dispatch(deleteCampus(id));
    axios.delete(`/api/campuses/${id}`, id).catch(console.error.bind(console));
  };
};
