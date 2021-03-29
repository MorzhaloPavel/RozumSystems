import { getEmployees as getDoctors, getWorklog as getList } from "../../api";
import { GET_EMPLOYEES, GET_WORKLOG } from "../constants";

export const getEmployees = () => {
  return async (dispatch) => {
    const employees = await getDoctors();
    dispatch({
      type: GET_EMPLOYEES,
      employees,
    });
  };
};

export const getWorklog = () => {
  return async (dispatch) => {
    const worklog = await getList();
    dispatch({
      type: GET_WORKLOG,
      worklog,
    });
  };
};
