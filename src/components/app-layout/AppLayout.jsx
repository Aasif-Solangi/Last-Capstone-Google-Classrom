import React, { useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Drawer, Divider, CssBaseline, useTheme, useMediaQuery, Button, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ProfileIcon from "../../assets/profile-icon.png";
import ClassroomIcon from "../../assets/Classroom-icon.svg";
import DehazeIcon from "@mui/icons-material/Dehaze";
import AppsIcon from "@mui/icons-material/Apps";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AddIcon from "@mui/icons-material/Add";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HomeIcon from "@mui/icons-material/Home";
import GradingIcon from "@mui/icons-material/Grading";
import { useNavigate } from "react-router-dom";

const AppLayout = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const classRooms = [
        { id: 1, name: "Web Dev Frontend S02", path: "/web-dev-frontend" },
        { id: 2, name: "English Communication", path: "/english-communication" },
        { id: 3, name: "WordPress", path: "/wordpress" },
        { id: 4, name: "English 01", path: "/english-communication" },
        { id: 5, name: "Professional Development", path: "/prof-development" },
        { id: 6, name: "Web Dev Frontend S01", path: "/web-dev-frontend" },
        { id: 7, name: "xWave Digital Literacy", path: "/xwave-digital" },
    ];

    const drawerWidth = 260;

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Classroom
                <img
                    className="rounded-1 mx-3"
                    src={ClassroomIcon} alt="Classroom"
                    style={{
                        width: "27px", height: "27px",
                        marginRight: "10px",
                    }} />
            </Typography>
            <Divider />
        </Box>
    );

    const navigate = useNavigate();

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                component="nav"
                sx={{
                    background: "#fff", boxShadow: "none",
                    borderBottom: "1px solid #ddd",
                }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box>
                            <IconButton
                                color="black"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: "none" } }}>
                                <MenuIcon />


                                {isMobile && (
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <img
                                            className="rounded-1 mx-3"
                                            src={ClassroomIcon}
                                            alt="Classroom"
                                            style={{
                                                width: "27px", height: "27px",
                                                marginRight: "10px",
                                            }} />
                                        <Typography
                                            variant="h6"
                                            component="div"
                                            sx={{
                                                color: "#333",
                                                display: { xs: "block", sm: "block" },
                                            }}>
                                            Classroom
                                        </Typography>
                                        <KeyboardArrowRightIcon className="text-black" />
                                        <Box className="ms-2">

                                        </Box>
                                    </Box>
                                )}
                            </IconButton>
                        </Box>
                        {!isMobile && (
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <DehazeIcon className="text-black mx-1" sx={{ cursor: 'pointer', fontSize: 25 }} />
                                <img onClick={(() => navigate("/"))}
                                    className="rounded-1 mx-3"
                                    src={ClassroomIcon}
                                    alt="Classroom"
                                    style={{
                                        width: "27px", height: "27px",
                                        marginRight: "10px", cursor: 'pointer'
                                    }} />
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{
                                        cursor: "pointer",
                                        color: "#333",
                                        display: { xs: "block", sm: "block" },
                                    }}>
                                    Classroom
                                </Typography>
                                <KeyboardArrowRightIcon className="text-black" />
                                <Box className="ms-2">
                                    <Typography
                                        variant="body-1"
                                        className="text-black"
                                        sx={{ fontSize: "15px" }}>
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
                        <Box sx={{ display: "flex", gap: 2, cursor: 'pointer' }}>
                            <AddIcon className="text-black mx-4 fs-4" />
                            <AppsIcon className="text-black mx-2" />
                            <img onClick={(() => navigate("/"))}
                                className="rounded-5 mx-3"
                                src={ProfileIcon}
                                alt="Profile"
                                style={{
                                    width: "33px", height: "33px",
                                    marginRight: "10px"
                                }} />
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
                    }}>
                    {drawer}
                    <Box
                        sx={{
                            width: { xs: "100%", md: "28%" },
                            borderRight: { xs: "none", md: "1px solid #ddd" }
                        }}>
                        <Box sx={{ borderBottom: "1px solid #ddd", paddingBottom: 2 }} className="mt-4">
                            <Box display="flex" alignItems="center" gap={2} sx={{ background: "#E8F0FE", borderRadius: "0px 40px 40px 0" }}  >
                                <Button sx={{ textTransform: 'none', color: 'black' }} onClick={(() => navigate("/"))}>
                                    <Box className='ms-3 d-flex justify-content-center align-items-center text-center' gap={2}>
                                        <HomeIcon className="fs-5" />
                                        <Typography>Home</Typography>
                                    </Box>
                                </Button>
                            </Box>
                            <Box display="flex" alignItems="center" gap={2} sx={{ padding: 1 }} className='my-2' >
                                <Box className='ms-3 d-flex justify-content-center align-items-center text-center' gap={2}>
                                    <CalendarTodayIcon className="fs-5" />
                                    <Typography >Calendar</Typography>
                                </Box>
                            </Box>

                            <Box display="flex" alignItems="center" gap={2} sx={{ padding: 1 }}>
                                <Box className='ms-3 d-flex justify-content-center align-items-center text-center' gap={2}>
                                    <GradingIcon className="fs-5" />
                                    <Typography >Enroll</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className='mx-3' gap={2}>
                            <Typography sx={{ marginTop: 3, marginBottom: 2, fontWeight: "bold" }}>
                                To-do
                            </Typography>
                            <Box>
                                <Box>
                                    {classRooms.map((classRoom) => (
                                        <Box
                                            key={classRoom.id}
                                            display="flex" alignItems="center"
                                            gap={2} sx={{ marginBottom: 2, cursor: "pointer" }}
                                            onClick={() => navigate(`/class-detail/${classRooms[0].id}`)}>
                                            <Box
                                                className="text-white rounded-5 d-flex justify-content-center align-items-center"
                                                sx={{ width: 32, height: 32, backgroundColor: "#007bff" }}>
                                                {classRoom.name.charAt(0)}
                                            </Box>
                                            <Typography>{classRoom.name}</Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Drawer>
            </nav>
        </Box>
    );
};
export default AppLayout;