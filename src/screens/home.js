import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigation = useNavigate();

  let goTo = () => {
    navigation(`/dashboard`);
  };

  return (
    <div>
      <Button onClick={goTo} variant="contained">
        Go To Dashboard
      </Button>
    </div>
  );
};

export default Home;
