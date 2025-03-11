import { Box, Card, CardContent, IconButton, Typography, Grid, Menu, MenuItem, Modal, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HomeIcon from "@mui/icons-material/Home";
import GradingIcon from "@mui/icons-material/Grading";
import WebDev from '../../assets/Cohort S2.jpg';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { useNavigate } from 'react-router';

const Home = () => {
    const classRooms = [
        { id: 1, name: "Web Dev Frontend S02", path: "/web-dev-frontend" },
        { id: 2, name: "English Communication", path: "/english-communication" },
        { id: 3, name: "WordPress", path: "/wordpress" },
        { id: 4, name: "English 01", path: "/english-communication" },
        { id: 5, name: "Professional Development", path: "/prof-development" },
        { id: 6, name: "Web Dev Frontend S01", path: "/web-dev-frontend" },
        { id: 7, name: "xWave Digital Literacy", path: "/xwave-digital" }
    ];

    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [assignmentTitle, setAssignmentTitle] = useState("");
    const [assignments, setAssignments] = useState([]);
    const [selectedClassRoomId, setSelectedClassRoomId] = useState(null);

    const handleClick = (event, classRoomId) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
        setSelectedClassRoomId(classRoomId);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setSelectedClassRoomId(null);
    };

    const handleCreateAssignment = () => {
        setModalOpen(true);
        handleClose();
    };

    const handleAssignmentSubmit = () => {
        const newAssignment = {
            title: assignmentTitle,
            date: new Date().toLocaleDateString(),
            classRoomId: selectedClassRoomId
        };
        setAssignments([...assignments, newAssignment]);
        console.log("Assignment Created: ", newAssignment);
        setModalOpen(false);
        setAssignmentTitle("");
    };

    return (
        <>
            <Box className="mt-5"
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                sx={{ gap: 1 }}>
                <Box className="d-none d-sm-block"
                    sx={{
                        width: { xs: "100%", md: "28%" },
                        borderRight: { xs: "none", md: "1px solid #ddd" }
                    }}>
                    <Box sx={{ borderBottom: "1px solid #ddd", paddingBottom: 2 }} className="mt-4">
                        <Box display="flex" alignItems="center" gap={2} sx={{ cursor: 'pointer', background: "#E8F0FE", borderRadius: "0px 40px 40px 0" }} onClick={(() => navigate("/"))}>
                            <Box className='ms-3 py-2 d-flex justify-content-center align-items-center text-center' gap={2}>
                                <HomeIcon className="fs-5 ms-2" />
                                <Typography>Home</Typography>
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="center" gap={2} sx={{ padding: 1 }} className='my-2' >
                            <Box className='ms-3 d-flex justify-content-center align-items-center text-center' gap={2}>
                                <CalendarTodayIcon className="fs-5" />
                                <Typography>Calendar</Typography>
                            </Box>
                        </Box>

                        <Box display="flex" alignItems="center" gap={2} sx={{ padding: 1 }}>
                            <Box className='ms-3 d-flex justify-content-center align-items-center text-center' gap={2}>
                                <GradingIcon className="fs-5" />
                                <Typography>Enroll</Typography>
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
                                    <Box key={classRoom.id}
                                        display="flex" alignItems="center"
                                        gap={2}
                                        sx={{ marginBottom: 2, cursor: "pointer" }}
                                        onClick={() => navigate(`/class-detail/${classRoom.id}`)}>
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

                <Box sx={{ width: "95%", py: 3, px: 4 }}>
                    <Grid container spacing={3} justifyContent="flex-start">
                        {classRooms.map((classRoom) => (
                            <Grid item xs={12} sm={6} md={4} key={classRoom.id}>
                                <Card sx={{
                                    width: 315, height: 315,
                                    cursor: "pointer", borderRadius: 2,
                                    overflow: "hidden", boxShadow: 3,
                                    display: "flex", flexDirection: "column",
                                    position: "relative"
                                }}
                                    onClick={() => {
                                        if (classRoom.path) {
                                            navigate(classRoom.path);
                                        } else {
                                            console.log("Path not defined for", classRoom.name);
                                        }
                                    }}>
                                    <Box sx={{ position: "relative", width: "100%", height: "150px" }}>
                                        <img src={WebDev}
                                            alt="web dev"
                                            style={{
                                                width: "100%", height: "70%",
                                                objectFit: "cover",
                                            }} />

                                        <Box
                                            sx={{
                                                position: "absolute", bottom: 28, left: 0,
                                                width: "100%", height: "100%", color: "#fff",
                                                display: "flex", flexDirection: "column",
                                                justifyContent: "center", padding: "16px",
                                            }}>
                                            <Typography
                                                variant="h5" fontWeight="bold"
                                                sx={{
                                                    whiteSpace: "nowrap", overflow: "hidden",
                                                    textOverflow: "ellipsis", maxWidth: "100%"
                                                }}>
                                                {classRoom.name}
                                            </Typography>
                                            <Typography variant="body2">Cohort 2 - Kingri</Typography>
                                            <Typography variant="body2" fontWeight="bold" mt={1}>
                                                xWave Team
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <IconButton
                                        sx={{
                                            position: "absolute",
                                            top: 5, right: 2,
                                            color: "#fff", background: "rgba(0,0,0,0.3)",
                                        }}
                                        onClick={(e) => handleClick(e, classRoom.id)}>
                                        <MoreVertIcon />
                                    </IconButton>

                                    <IconButton
                                        className="px-4 py-4"
                                        sx={{
                                            position: "absolute",
                                            top: 70, right: 20,
                                            color: "#fff", background: "#7E57C2",
                                            "&:hover": {
                                                background: "#7E57C2",
                                            }
                                        }}>
                                        <Typography className='fs-4 px-2'>X</Typography>
                                    </IconButton>

                                    <Box sx={{ flexGrow: 1 }} />
                                    <CardContent
                                        sx={{
                                            borderTop: "1px solid #ddd",
                                            padding: "8px", display: "flex",
                                            justifyContent: "flex-end",
                                        }} >
                                        <IconButton>
                                            <AssignmentIndIcon />
                                        </IconButton>
                                        <IconButton>
                                            <FolderOpenIcon />
                                        </IconButton>
                                    </CardContent>

                                    {/* Display Assignments */}
                                    {assignments.filter(assignment => assignment.classRoomId === classRoom.id).map((assignment, index) => (
                                        <Box key={index} sx={{ p: 2 }}>
                                            <Typography variant="body2" fontWeight="bold">
                                                {assignment.title}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Created on: {assignment.date}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }} >
                <MenuItem onClick={handleCreateAssignment}>Create Assignment</MenuItem>
            </Menu>

            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <Box sx={{ width: 400, bgcolor: 'white', p: 3, mx: 'auto', mt: 10, borderRadius: 2 }}>
                    <Typography variant="h6" gutterBottom>Create Assignment</Typography>
                    <TextField fullWidth label="Assignment Title" value={assignmentTitle} onChange={(e) => setAssignmentTitle(e.target.value)} sx={{ mb: 2 }} />
                    <Button variant="contained" color="primary" onClick={handleAssignmentSubmit} fullWidth>Submit</Button>
                </Box>
            </Modal>
        </>
    );
};

export default Home;