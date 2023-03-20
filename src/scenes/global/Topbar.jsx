import React from "react";
import {Menu as MenuIcon,Search, } from "@mui/icons-material";
import FlexBetween from "../../components/FlexBetween";
import {AppBar, Box, IconButton, InputBase, Toolbar, useTheme} from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { ColorModeContext, tokens } from "../../theme";
import { useContext } from "react";


const Topbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

   //Box component is MaterialUI, can put properties directly into it. for other MUI use sx={}
    //Pro: Can see css right here. Con: Lots of components in element
  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left side */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor= {{color: colors.grey[100]}}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* Right side */}
        <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )} 
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>  
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>  
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>    
            </Box>       
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;