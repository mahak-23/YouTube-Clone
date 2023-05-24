//context creation
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

let API = "https://internship-service.onrender.com/videos";

const initialstate = {
  isLoading: true,
  page: 0,
  posts: [],
  playingVideoUrl: null,
  expandedPostIds: []
};

const AppContext = React.createContext();

// to create a provider function
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const res = await fetch(url);
      const data = await res.json();
      //console.log(data.data);
      dispatch({
        type: "GET_POSTS",
        payload: {
          posts: data.data.posts
        }
      });
      // isLoading = false;
    } catch (error) {
      console.log(error);
    }
  };
  const getNextPage = () => {
    dispatch({
      type: "NEXT_PAGE"
    });
  };

  const getPrevPage = () => {
    dispatch({
      type: "PREV_PAGE"
    });
  };

  const handleToggleExpand = (postId) => {
    const isExpanded = state.expandedPostIds.includes(postId);
    dispatch({
      type: "SET_EXPANDED_POST",
      payload: { postId, expanded: !isExpanded }
    });
  };

  const isPostExpanded = (postId) => {
    return state.expandedPostIds.includes(postId);
  };
  const handleThumbnailClick = (videoUrl) => {
    dispatch({ type: "SET_PLAYING_VIDEO", payload: videoUrl });
  };

  const handleVideoEnd = () => {
    dispatch({ type: "SET_PLAYING_VIDEO", payload: null });
  };

  useEffect(() => {
    fetchApiData(`${API}?page=${state.page}`);
  }, [state.page]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        getNextPage,
        handleToggleExpand,
        isPostExpanded,
        handleThumbnailClick,
        handleVideoEnd,
        getPrevPage
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook create
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
