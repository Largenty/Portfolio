import React, { Fragment } from "react";
import Button from "../components/Button";


const Home = () => {
  return <div className="flex justify-center align-center column" style={{height:'100vh'}}>
    <h1>Ludovic Argenty</h1>
    <h2>Dev Full stack</h2>
    <Button {...{text:''} as any}/>
  </div>;
};

export default Home