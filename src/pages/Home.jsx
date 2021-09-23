import React from "react";
import CardItem from "../components/CardItem";
import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
function Home() {
  // const { authInfo } = useContext(AuthContext);
  return (
    <div>
      <h1>Dashboard </h1>
      {/* {authInfo} */}
      <CardItem />
    </div>
  );
}

export default Home;