import React from "react";
// import CardItem from "./CardItem";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Details from "./Details";

function Main() {
  const { authInfo } = useContext(AuthContext);
  return (
    <div>
      <h1>Dashboard </h1>
      {authInfo}
      {/* <CardItem /> */}
      <Details />
    </div>
  );
}

export default Main;