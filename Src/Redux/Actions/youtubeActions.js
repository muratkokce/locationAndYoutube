import Axios from 'axios';
import ActionTypes from 'Redux/ActionTypes';
import Utils from 'Helpers/Utils';

export const getYoutubeVideos = (coordinate, pageToken, youtubeKey) => {
  const baseUrl = 'https://youtube.googleapis.com/youtube/v3/';
  return dispatch => {
    dispatch({type: ActionTypes.GET_YOUTUBE_VIDEOS});
    Axios({
      method: 'GET',
      url: `${baseUrl}search?part=snippet&pageToken=${
        pageToken || ''
      }&location=${coordinate?.latitude}%2C${
        coordinate?.longitude
      }&locationRadius=10mi&q=surfing&type=video&maxResults=10&key=${youtubeKey}`,
      headers: {
        Accept: 'application/json',
      },
    })
      .then(rsp => {
        const data = rsp?.data;
        if (data) {
          dispatch({
            type: ActionTypes.GET_YOUTUBE_VIDEOS_SUCCESS,
            data: data,
          });
        }
      })
      .catch(err => {
        dispatch({
          type: ActionTypes.GET_YOUTUBE_VIDEOS_FAIL,
          data: err?.Error,
        });
      });
  };
};
