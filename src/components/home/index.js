import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncUsers } from "../../features/user-slice";
import Users from "../users";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncUsers());
  }, [dispatch]);

  return (
    <>
      <Users />
    </>
  );
};

export default Home;
