import Actionlist from '../action/Actionlist.js';

export const Placeempty = () => {
  return (dispatch) => {
    dispatch(Actionlist.fetchDataEmpty(true));
  };
};
