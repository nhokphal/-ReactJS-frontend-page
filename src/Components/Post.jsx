import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Avatar,
  Typography,
} from "@mui/material";
import {
  CheckBox,
  Favorite,
  FavoriteBorder,
  MoreVert,
  Padding,
  Share,
} from "@mui/icons-material";
import React from "react";
import { maxHeight } from "@mui/system";
import { useState } from "react";

export default function Post() {

// const [color, setColor] = useState('white');
 

  return (
    <Card sx={{margin: '15px 0 10px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="10%"
        image="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" >
          {/* <Favorite color="red"/> */}
        <CheckBox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red"}} /> } />

        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}
