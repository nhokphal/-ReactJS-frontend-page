import React, { useState } from 'react';
import { AppBar, styled, Toolbar, Typography, InputBase, Box, Badge, Avatar, MenuItem, Menu  } from "@mui/material"
import { Mail, Notifications, Pets,  } from "@mui/icons-material"

const StyledToolbar  = styled(Toolbar)(
{    
        display: "flex",
        justifyContent: "space-between",
}

)

// search bar styling
const Search = styled("div")(({ theme }) => (
    {
        background:"grey",
        padding: "0 10px",
        width: "25%",
        display: "flex",
    }
));


//ICON NAVBAR styling
const Icons = styled(Box)(({ theme }) => (
{
    display: "none",
    alignItems: "center",
    //space 
    gap: "20px",
    //if user upper sm, display flex 
    [theme.breakpoints.up("sm")]:
    {
        display: "flex"
    }
}));

/// 
const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

const imgDTB = {
    avatar: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&https://www.google.com/url?sa=i&url=https%3A%2F%2Fwhnt.com%2Fnews%2Fcats-classified-as-invasive-alien-species-by-scientific-institute%2F&psig=AOvVaw2VyZKWNY2qOe8g1lApv1be&ust=1664333777136000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPCJyNL8s_oCFQAAAAAdAAAAABAO=tinysrgb&w=1260&h=750&dpr=2"
} 



function NavBar({mode, setMode}) {

    const [open, setOpen] = useState(false);
    
    return (
        <AppBar position='sticky' sx={{backgroundColor: "black"}}>   
            <StyledToolbar>
               <Typography variant='h4' sx={{ display: {xs: "none", sm: "block"}}}>
               MySite
               </Typography>  
               <Pets sx={{ display: { xs: "block", sm: "none" } }} />
              <Search>
                <InputBase placeholder='Search..' ></InputBase>
              </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">    
                        <Mail />
                    </Badge>
                    <Badge badgeContent={5} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30, cursor: "pointer"}} 
                    alt="Cindy Baker" src={imgDTB.avatar}
                    onClick={(e) => setOpen(true)}
                    />           
                </Icons>
                {/* handle click eventListener logic default value "true"*/}
                <UserBox onClick={(e) => setOpen(true)}>
                    <Avatar sx={{ width: 30, height: 30, }} 
                    alt="Cindy Baker" src={imgDTB.avatar}/> 
                    ZTOA
                </UserBox>
            </StyledToolbar>

            <Menu
            id="positioned-menu"
            aria-labelledby="positioned-button"
            open={open}
            onClose={(e) => setOpen(false)}
            anchorOrigin={{
            vertical: "top",
            horizontal: "right",
            }}
            transformOrigin={{
            vertical: "top",
            horizontal: "right",
            }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>

        </AppBar>
    );
}

export default NavBar;