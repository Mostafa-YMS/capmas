import { getBirthNumbersService } from "../../../services/birthNumbers";
import {
  BIRTH_NUMBERS_LOADING,
  GET_BIRTH_NUMBERS,
  BIRTH_NUMBERS_ERROR,
} from "../types";

export const getBirthNumbersAction =
  ({ startDate, endDate, birthType }) =>
  (dispatch) => {
    dispatch({ type: BIRTH_NUMBERS_LOADING });
    return getBirthNumbersService({ startDate, endDate, birthType }).then(
      (d) => {
        if (d?.error) {
          dispatch({ type: BIRTH_NUMBERS_ERROR, payload: d?.error });
        } else {
          dispatch({ type: GET_BIRTH_NUMBERS, payload: d });
        }
      }
    );
  };
