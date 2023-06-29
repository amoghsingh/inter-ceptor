import React from "react";
import { useSelector } from "react-redux";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { fetchAsyncPost } from "../../features/post-slice";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const result = useSelector((state) => state.posts.posts);
  console.log("result: ", result);

  const viewPost = (id) => {
    dispatch(fetchAsyncPost(id));
    navigate(`/posts/post/${id}`);
  };

  return (
    <>
      <div className="card-container">
        {result.length > 0
          ? result.map((item) => {
              return (
                <div
                  className="post-card"
                  key={item.id}
                  onClick={() => {
                    viewPost(item.id);
                  }}
                >
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default Posts;
