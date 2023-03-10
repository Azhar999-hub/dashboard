import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";

const SmCard = (props) => {
  let { id, name, body, height, email } = props;
  return (
    <Card elevation={10} sx={{ height }}>
      <CardContent>
        <Avatar  className="my-1" sx={{ bgcolor: "red" }} aria-label="recipe">
          {id}
        </Avatar>
        <Typography variant="h5" color="text.secondary">
          {email}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {name}
        </Typography>
        <Divider />
        <Typography variant="p" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SmCard;
