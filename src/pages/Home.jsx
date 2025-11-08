import React from "react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  const redirectToUsersPage = () => {
    console.log('test')
    navigate("/users",{state:{name:"ali",age:27}});
  };
  return (
    <div>
      <h1>home page</h1>
      <button onClick={redirectToUsersPage}>users</button>
    </div>
  );
}
