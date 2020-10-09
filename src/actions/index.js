import * as constants from './../constants';

// ------------------------------------
// Action creators
// ------------------------------------
export const setHistoryData = (data) => {
  return {
      type: constants.SET_HISTORY_DATA,
      payload: {
        data
      }
    }
}
