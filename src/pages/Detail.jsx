import React from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const param = useParams();
  console.log(param.id);

  return (
    <div>
      <h1>
        Detail <span>{param.id}</span>
      </h1>
      <p>페이지 아이디 :{param.id}</p>
      <Link to="/">HOME으로</Link>
    </div>
  );
};

export default Detail;
