import React from "react";
import { useGlobalContext } from "../context";

function VideoList() {
  const {
    posts,
    isLoading,
    isPostExpanded,
    handleToggleExpand,
    handleThumbnailClick,
    handleVideoEnd,
    playingVideoUrl
  } = useGlobalContext();

  if (isLoading) {
    return (
      <>
        <h1>Loading.....</h1>
      </>
    );
  }

  return (
    <>
      <div className="posts-div">
        {posts.map((curPost) => {
          return (
            <>
              <div className="card" key={curPost.postId}>
                <div className="creator-info">
                  <img
                    className="profile-pic"
                    src={curPost.creator.pic}
                    alt="Profile"
                  />
                  <p className="creator-name">
                    {curPost.creator.name || curPost.creator.handle}
                  </p>
                </div>

                <div className="thumbnail-container">
                  {playingVideoUrl === curPost.submission.mediaUrl ? (
                    <video
                      className="video"
                      src={curPost.submission.mediaUrl}
                      controls
                      autoPlay
                      onEnded={handleVideoEnd}
                    ></video>
                  ) : (
                    <>
                      <img
                        className="thumbnail"
                        src={curPost.submission.thumbnail}
                        alt="Thumbnail"
                        onClick={() =>
                          handleThumbnailClick(curPost.submission.mediaUrl)
                        }
                      />
                    </>
                  )}
                </div>
                <div className="card-content">
                  <h2>{curPost.submission.title}</h2>
                  <p>
                    {isPostExpanded(curPost.postId)
                      ? curPost.submission.description
                      : curPost.submission.description.slice(0, 100)}
                  </p>
                  {curPost.submission.description.length > 100 && (
                    <button
                      onClick={() => handleToggleExpand(curPost.postId)}
                      className="postBtn"
                    >
                      {isPostExpanded(curPost.postId)
                        ? "Read Less"
                        : "Read More"}
                    </button>
                  )}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default VideoList;
