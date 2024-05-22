import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/detail/1">
        Detail<span style={{ fontWeight: "bold" }}>1</span>로 이동하기
      </Link>
      <br />
      <Link to="/detail/2">
        Detail<span style={{ fontWeight: "bold" }}>2</span>로 이동하기
      </Link>
    </>
  );
};

export default Home;
