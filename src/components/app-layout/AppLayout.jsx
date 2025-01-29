import React, { useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Drawer, Divider, CssBaseline, useTheme, useMediaQuery, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ProfileIcon from "../assets/profile-icon.png";
import ClassroomIcon from "../assets/Classroom-icon.svg";
import DehazeIcon from "@mui/icons-material/Dehaze";
import AppsIcon from "@mui/icons-material/Apps";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AddIcon from "@mui/icons-material/Add";

const AppLayout = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawerWidth = 240;

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Classroom
            </Typography>
            <Divider />
        </Box>
    );

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                component="nav"
                sx={{
                    background: "#fff",
                    boxShadow: "none",
                    borderBottom: "1px solid #ddd",
                }}
            >
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: "none" } }}>
                            <MenuIcon />
                        </IconButton>
                        {!isMobile && (
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <DehazeIcon className="text-black mx-1" sx={{ fontSize: 25 }} />
                                <img
                                    className="rounded-1 mx-3"
                                    src={ClassroomIcon}
                                    alt="Classroom"
                                    style={{
                                        width: "27px",
                                        height: "27px",
                                        marginRight: "10px",
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{
                                        fontFamily: "Jost, sans-serif",
                                        color: "#333",
                                        display: { xs: "none", sm: "block" },
                                    }}
                                >
                                    Classroom
                                </Typography>
                                <KeyboardArrowRightIcon className="text-black" />
                                <Box className="ms-2">
                                    <Typography
                                        variant="body-1"
                                        className="text-black"
                                        sx={{ fontSize: "15px" }}
                                    >
                                        Web Dev Frontend S02
                                    </Typography>
                                    <Typography className="text-black" sx={{ fontSize: "13px" }}>
                                        Cohort 2 - Kingri
                                    </Typography>
                                </Box>
                            </Box>
                        )}
                    </Box>
                    {!isMobile && (
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <AddIcon className="text-black mx-4 fs-4" />
                            <AppsIcon className="text-black mx-2" />
                            <img
                                className="rounded-5 mx-3"
                                src={ProfileIcon}
                                alt="Profile"
                                style={{
                                    width: "33px",
                                    height: "33px",
                                    marginRight: "10px",
                                }}
                            />
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
};

export default AppLayout;
