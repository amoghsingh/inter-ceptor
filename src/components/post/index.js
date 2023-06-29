import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import { removeSelectedPost } from "../../features/post-slice";

const Post = () => {
  const result = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(removeSelectedPost());
    };
  }, [dispatch]);

  return (
    <>
      <div>
        <h3>Post</h3>
        {result !== undefined ? (
          <div className="post">
            <strong>{result.title}</strong>
            <p>{result.body}</p>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Post;
