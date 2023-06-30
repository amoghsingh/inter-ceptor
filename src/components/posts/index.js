import React from "react";
import { useSelector } from "react-redux";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { fetchAsyncPost } from "../../features/post-slice";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Posts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userid } = useParams();

  const result = useSelector((state) => state.posts.posts);
  console.log("result: ", result);

  const viewPost = (id) => {
    dispatch(fetchAsyncPost(id));
    navigate(`/users/${userid}/posts/${id}`);
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
                  <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
                  <FontAwesomeIcon icon={faTrashCan} className="del-icon" />
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default Posts;
