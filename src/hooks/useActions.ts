import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators } from "../state";

export const useActions = () => {
  const dispatch = useDispatch();

  //   return action reators
  return bindActionCreators(actionCreators, dispatch);
};
