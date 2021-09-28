import Actionlist from '../action/Actionlist.js';
import Config from 'react-native-config';

export const getPlace = (serachTxt) => {
  return async (dispatch) => {
    try {
      const getPlacePromise = await fetch(
        Config.API_URL +
          serachTxt +
          '&radius=10000&key=' +
          Config.GOOGLE_MAPS_API_KEY,
      );
      dispatch(Actionlist.fetchData(true));
      const place = await getPlacePromise.json();

      dispatch(Actionlist.fetchDataFulfilled(place.results));
    } catch (error) {
      dispatch(Actionlist.fetchDataRejected(error));
    }
  };
};
