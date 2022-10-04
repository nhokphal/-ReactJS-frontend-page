import React from "react";
import { styled, Button } from "@mui/material"


const SetStyle = styled(Button)( {

        background:"blue",
        color:"red",
        margin:1,
        "&:hover":
        {
            background: "white"
        }
    }
    )

export default SetStyle;