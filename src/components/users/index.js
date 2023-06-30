import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncPosts } from "../../features/post-slice";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import Footer from "../footer";

const Users = () => {
  const navigate = useNavigate();

  const result = useSelector((state) => state.users.users);
  console.log("result : ", result);

  const dispatch = useDispatch();

  // useEffect(() => {}, []);

  const openPosts = (id) => {
    dispatch(fetchAsyncPosts(id));
    navigate(`/users/${id}/posts`);
  };

  const handleScroll = () => {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    if (document.querySelector(".pbar"))
      document.querySelector(".pbar").style.width = scrolled + "%";
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div className="pbar-container">
        <div className="pbar"></div>
      </div>
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
