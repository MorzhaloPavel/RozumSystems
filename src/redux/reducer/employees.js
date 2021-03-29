import { GET_EMPLOYEES } from "../constants";

const initialState = {
  employees: [],
};

const employees = (state = initialState, { type, employees }) => {
  switch (type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employees,
      };
    default:
      return state;
  }
};
export default employees;
