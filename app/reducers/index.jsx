import { combineReducers } from "redux";
import axios from "axios";
import campuses from "./campusReducer";
import students from "./studentReducer";

export default combineReducers({ campuses, students });
