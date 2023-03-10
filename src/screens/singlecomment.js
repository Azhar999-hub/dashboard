import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SmCard from "../components/smcard";
import { Get } from "../config/apibasemethods";




const Singlecomments = () => {
  let [data, setData] = useState([]);
  let params = useParams();
  console.log(params.id);



  let singleComments = () => {
    Get("comments")
      .then((res) => {
        setData(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    singleComments();
  });

  return (
    <Container className="mt-5">
      {data
        .filter((x) => x.id === parseInt(params.id))
        .map((e, i) => {
          return (
            <SmCard className="mx-auto" height={"400px"} key={i} id={e.id} name={e.name} body={e.body} email={e.email} />
          );
        })}
    </Container>
  );
};

export default Singlecomments;
