import { GET_WORKLOG } from "../constants";

const initialState = {
  worklog: [],
};

const worklog = (state = initialState, { type, worklog }) => {
  switch (type) {
    case GET_WORKLOG:
      return {
        ...state,
        worklog,
      };
    default:
      return state;
  }
};
export default worklog;
