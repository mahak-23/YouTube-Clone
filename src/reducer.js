function reducer(state, action) {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true
      };

    case "GET_POSTS":
      return {
        ...state,
        isLoading: false,
        posts: action.payload.posts
      };
    case "NEXT_PAGE":
      let pageNumInc = state.page + 1;
      if (pageNumInc >= 10) {
        pageNumInc = 0;
      }
      return {
        ...state,
        page: pageNumInc
      };

    case "PREV_PAGE":
      let pageNum = state.page - 1;
      if (pageNum <= 0) {
        pageNum = 0;
      }
      return {
        ...state,
        page: pageNum
      };
    case "SET_PLAYING_VIDEO":
      return { ...state, playingVideoUrl: action.payload };

    case "SET_EXPANDED_POST":
      const { postId, expanded } = action.payload;
      if (expanded) {
        return {
          ...state,
          expandedPostIds: [...state.expandedPostIds, postId]
        };
      } else {
        return {
          ...state,
          expandedPostIds: state.expandedPostIds.filter((id) => id !== postId)
        };
      }
    default:
      return state;
  }
}

export default reducer;
