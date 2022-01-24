import ActionTypes from '../ActionTypes/index';

const INITIAL_STATE = {
  youtubeVideoList: null,
  youtubeVideoLoading: false,
  youtubeVideoError: null,
};

const youtubeVideoReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_YOUTUBE_VIDEOS:
      return {
        ...state,
        youtubeVideoList: null,
        youtubeVideoLoading: true,
        youtubeVideoError: null,
      };
    case ActionTypes.GET_YOUTUBE_VIDEOS_SUCCESS:
      return {
        ...state,
        youtubeVideoList: action.data,
        youtubeVideoLoading: false,
        youtubeVideoError: null,
      };
    case ActionTypes.GET_YOUTUBE_VIDEOS_FAIL:
      return {
        ...state,
        youtubeVideoList: null,
        youtubeVideoLoading: false,
        youtubeVideoError: action.data,
      };
    default:
      return state;
  }
};

export default youtubeVideoReducers;
