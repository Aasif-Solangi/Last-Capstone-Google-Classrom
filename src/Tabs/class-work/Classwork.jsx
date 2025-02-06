import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HomeIcon from "@mui/icons-material/Home";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GradingIcon from "@mui/icons-material/Grading";
import xWave from '../../assets/xWave.png';
import Profile from '../../assets/Asif.png';
import Developer from '../../assets/Sir.png';
import TAImage from '../../assets/TA-profile.png';
import Abuzar from '../../assets/Abuzar.jpg';
import { Box, Button, Card, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ArticleIcon from '@mui/icons-material/Article';
import MessageIcon from '@mui/icons-material/Message';

const Classwork = () => {
    const classRooms = [
        { id: 1, name: "Web Dev Frontend S02" },
        { id: 2, name: "English Communication" },
        { id: 3, name: "WordPress" },
        { id: 4, name: "English 01" },
        { id: 5, name: "Professional Development" },
        { id: 6, name: "Web Dev Frontend S01" },
        { id: 7, name: "English Communication" },
        { id: 8, name: "Xwave Digital Literacy (Sindhi)" }
    ];


    const Teachers = [
        { id: 2, name: "Capstone 1 Evaluations Part 2 (13 june...)", image: Developer },
        { id: 3, name: "Capstone 1 Evaluations Part 1 (12 june...)", image: TAImage }
    ];

    const Students = [
        { id: 1, name: "Aasif Ali", image: Profile },
        { id: 2, name: "Abuzar Ali", image: Abuzar },
    ];

    const navigate = useNavigate();
    return (
        <>
            <Box className="mt-5"
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                sx={{ gap: 2 }}
            >
                <Box
                    sx={{
                        width: { xs: "100%", md: "22%" },
                        borderRight: { xs: "none", md: "1px solid #ddd" },
                        borderBottom: { xs: "none", md: "1px solid #ddd" },

                    }}
                >
                    <Box sx={{ borderBottom: "1px solid #ddd", paddingBottom: 2 }} className="mt-4">
                        <Box display="flex" alignItems="center" gap={2} sx={{ background: "#E8F0FE", borderRadius: "0px 40px 40px 0", padding: 1 }}  >
                            <Box className='ms-3 d-flex justify-content-center align-items-center text-center' gap={2}>
                                <HomeIcon className="fs-5" />
                                <Typography >Home</Typography>
                            </Box>
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
                    <Box className='mx-3'>
                        <Typography sx={{ marginTop: 3, marginBottom: 2, fontWeight: "bold" }}>
                            To-do
                        </Typography>
                        {classRooms.map((classRoom) => (
                            <Box key={classRoom.id} display="flex" alignItems="center" gap={2} sx={{ marginBottom: 2 }}  >
                                <Box className="text-white rounded-5 d-flex justify-content-center align-items-center"
                                    sx={{ width: 32, height: 32, backgroundColor: "#007bff" }}>
                                    {classRoom.name.charAt(0)}
                                </Box>
                                <Typography>{classRoom.name}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box flexGrow={1}>
                    <Box className="mt-3"
                        display="flex" sx={{ borderBottom: "1px solid #ddd" }}>
                        <Button onClick={() => navigate("/stream")}>
                            <Typography sx={{ textTransform: "none" }} className="mx-3">Stream</Typography>
                        </Button>
                        <Button onClick={() => navigate("/class-work")} sx={{ borderBottom: "3px solid rgb(18, 43, 231)", }}>
                            <Typography sx={{ color: "#007bff", textTransform: "none" }}>
                                Classwork
                            </Typography>
                        </Button>
                        <Button onClick={() => navigate("/people")}>
                            <Typography sx={{ textTransform: "none" }} className="ms-3">People</Typography>
                        </Button>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
                        <Box className="container" sx={{ width: { xs: "100%", sm: "50%", md: "75%" } }}>
                            <Button className="d-flex justify-content-between gap-2 mt-2" variant="text">
                                <AssignmentIndIcon className="fs-5 " />
                                <Button sx={{ textTransform: 'none' }} className="fs-6">View your work</Button>
                            </Button>

                            <TextField className='text-dark w-50 my-3' select
                                sx={{ flex: 1, minWidth: "200px" }}>
                                2 adults . 0 children . 1 room
                                <MenuItem>All Topics</MenuItem>
                                <MenuItem>Final Capstone Project</MenuItem>
                                <MenuItem>Capstone Project</MenuItem>
                            </TextField>
                            <Box gap={2} className='my-3 d-flex justify-content-between'>
                                <Box class='d-flex justify-content-between align-items-center gap-2'>
                                    <Box className="text-white rounded-5 d-flex justify-content-center align-items-center py-3"
                                        sx={{ width: 32, height: 32, backgroundColor: "#007bff" }}>
                                        <ArticleIcon />
                                    </Box>
                                    <Box>
                                        <Typography>Git and GitHub practice </Typography>
                                    </Box>
                                </Box>
                                <Typography variant="body2">No Due Date<MoreVertIcon /></Typography>
                            </Box>
                            <hr />
                            {Teachers.map((teacher) => (
                                <Box display="flex" alignItems="center" gap={2} sx={{ borderBottom: "1px solid #ddd", paddingBottom: 2 }} className='my-3'>
                                    <Box key={teacher.id} display="flex" alignItems="center" gap={1}>
                                        <Box className="text-white py-3 rounded-5 d-flex justify-content-center align-items-center"
                                            sx={{ width: 32, height: 32, backgroundColor: "#BDBDBE" }}>
                                            <ArticleIcon />
                                        </Box>
                                        <Box>
                                            <Typography>{teacher.name}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                            <Box variant="text" sx={{ textTransform: 'none' }} display="flex" alignItems="center" gap={2}>
                                <Box class='d-flex justify-content-between align-items-center gap-2'>
                                    <Box className="text-white rounded-5 d-flex justify-content-center align-items-center py-3"
                                        sx={{ width: 32, height: 32, backgroundColor: "#007bff" }}>
                                        <ArticleIcon />
                                    </Box>
                                    <Box>
                                        <Typography>Template Assignment <MessageIcon className="fs-5 ms-2" />17</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="mt-5 pt-2">
                                <Typography variant="h5" sx={{ textTransform: 'none' }}>Final Capstone Project</Typography>
                            </Box>
                            <hr />
                            <Box gap={2} className='my-3 d-flex justify-content-between'>
                                <Box class='d-flex justify-content-between align-items-center gap-2'>
                                    <Box className="text-white rounded-5 d-flex justify-content-center align-items-center py-3"
                                        sx={{ width: 32, height: 32, backgroundColor: "#007bff" }}>
                                        <ArticleIcon />
                                    </Box>
                                    <Box>
                                        <Typography>Group 1 (Google classroom clone)</Typography>
                                    </Box>
                                </Box>
                                <Typography variant="body2">Due, Tomorrow 11:59 PM <MoreVertIcon /></Typography>
                            </Box>

                            <Box className="mt-5 pt-4">
                                <Typography variant="h5" sx={{ textTransform: 'none' }}>Capstone Project 3</Typography>
                            </Box>
                            <hr />
                            <Box gap={2} className='my-3 d-flex justify-content-between'>
                                <Box class='d-flex justify-content-between align-items-center gap-2'>
                                    <Box className="text-white rounded-5 d-flex justify-content-center align-items-center py-3" sx={{ width: 32, height: 32, backgroundColor: "#007bff" }}>
                                        <ArticleIcon />
                                    </Box>
                                    <Box>
                                        <Typography>Group 1</Typography>
                                    </Box>
                                </Box>
                                <Typography variant="body2"> No Due <MoreVertIcon /></Typography>
                            </Box>

                            <Box className="py-2 mt-5">
                                <Typography variant="h5" sx={{ textTransform: 'none' }}></Typography>
                            </Box>
                            {Students.map((student) => (
                                <Box display="flex" alignItems="center" gap={2} sx={{ borderBottom: "1px solid #ddd", paddingBottom: 2 }} className='my-3'>
                                    <Box key={student.id} display="flex" alignItems="center" gap={1}>
                                        <Box className="text-white rounded-5 d-flex justify-content-center align-items-center"
                                            sx={{ width: 32, height: 32, backgroundColor: "#007bff" }}>
                                            <img src={student.image} alt={student.name} className="rounded-5" />
                                        </Box>
                                        <Box> 
                                            <Typography>{student.name}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box >
        </>
    )
}



export default Classwork;

