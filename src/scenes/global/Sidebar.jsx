import React from "react";
import {Box,
  Divider,
  Drawer, 
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../components/FlexBetween";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import ChevronLeft from "@mui/icons-material/ChevronLeft"
import ChevronRightOutlined from "@mui/icons-material/ChevronRightOutlined"
// import { tokens } from "../../theme";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlinedIcon />,
    link: "/",
  },
  {
    text: "Manage Team",
    icon: <PeopleOutlinedIcon />,
    link: "/team",
  },
  {
    text: "Contacts Information",
    icon: <ContactsOutlinedIcon />,
    link: "/contacts",
  },
  {
    text: "Invoice Balances",
    icon: <ReceiptOutlinedIcon />,
    link: "/invoices",
  },
  {
    text: "Profile Form",
    icon: <PersonOutlinedIcon />,
    link: "/form",
  },
  {
    text: "Calendar",
    icon: <CalendarTodayOutlinedIcon />,
    link: "/calendar",
  },
  {
    text: "FAQ Page",
    icon: <HelpOutlineOutlinedIcon />,
    link: "/faq",
  },
  {
    text: "Bar Chart",
    icon: <BarChartOutlinedIcon />,
    link: "/bar",
  },
  {
    text: "Pie Chart",
    icon: <PieChartOutlineOutlinedIcon />,
    link: "/pie",
  },
  {
    text: "Line Chart",
    icon: <TimelineOutlinedIcon />,
    link: "/line",
  },
  {
    text: "Geography Chart",
    icon: <MapOutlinedIcon />,
    link: "/geography",
  },
];

const Sidebar = ({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  // const colors = tokens(theme.palette.mode);


  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    KRISE ADMINISTRATION
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon, link }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(link);
                        setActive(link);
                      }}
                      sx={{
                        backgroundColor:
                          active === link
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === link
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === link
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === link && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          <Box position="absolute" bottom="2rem">
            <Divider />
            <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
              <Box
                component="img"
                alt="user"
                src="assets/user.png"
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  Shawn Krise
                </Typography>
                <Typography
                  fontSize="0.8rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  Administrator
                </Typography>
              </Box>
              <SettingsOutlined
                sx={{
                  color: theme.palette.secondary[300],
                  fontSize: "25px ",
                }}
              />
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;