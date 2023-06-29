import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncPosts } from "../../features/post-slice";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import Footer from "../footer";
import { useGlobalContext } from "../../context";

const Users = () => {
  const navigate = useNavigate();
  const { updateUserId } = useGlobalContext();

  const result = useSelector((state) => state.users.users);
  console.log("result : ", result);

  const dispatch = useDispatch();

  const openPosts = (id) => {
    dispatch(fetchAsyncPosts(id));
    navigate(`/posts/${id}`);
    updateUserId(id);
  };

  return (
    <>
      <div className="card-container">
        {result.length > 0 ? (
          result.map((item) => {
            return (
              <>
                <div
                  className="user-card"
                  onClick={() => {
                    openPosts(item.id);
                  }}
                  key={item.id}
                >
                  <p>Name: {item.name}</p>
                  <p>Company: {item.company.name}</p>
                  <span>Username: {item.username}</span>
                  <span>Website: {item.website}</span>
                  <p>Phone: {item.phone}</p>
                  <p>Email: {item.email}</p>
                  <p>City: {item.address.city}</p>
                </div>
              </>
            );
          })
        ) : (
          <p className="loader">Loading...</p>
        )}
      </div>

      {result.length > 0 ? <Footer /> : null}
    </>
  );
};

export default Users;
