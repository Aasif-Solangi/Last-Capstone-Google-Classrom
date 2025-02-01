import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HomeIcon from "@mui/icons-material/Home";
import GradingIcon from "@mui/icons-material/Grading";
import xWave from '../../assets/xWave.png';
import Profile from '../../assets/Asif.png';
import Developer from '../../assets/Sir.png';
import TAImage from '../../assets/TA-profile.png';
import Abuzar from '../../assets/Abuzar.jpg';
import Ayaz from '../../assets/smile.jpg';
import Faiz from '../../assets/Faiz.png';
import Arif from '../../assets/arif.jpg';
import Haris from '../../assets/Haris.jpg';
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { Navigate, useNavigate } from "react-router";

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
        { id: 1, name: "xWave Team", image: xWave },
        { id: 2, name: "Ijaz Liaqat", image: Developer },
        { id: 3, name: "Kainat Fareed", image: TAImage }
    ];

    const Students = [
        { id: 1, name: "Aasif ALi", image: Profile },
        { id: 2, name: "Abuzar Ali", image: Abuzar },
        { id: 3, name: "Ayaz", image: Ayaz },
        { id: 4, name: "Faiz", image: Faiz },
        { id: 5, name: "Muhammad Aurif", image: Arif },
        { id: 6, name: "Muhammad Haris", image: Haris }
    ];


    return (
        <>
            <Box className="mt-5"
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                sx={{ padding: 2, gap: 2 }}
            >
                <Box
                    sx={{
                        width: { xs: "100%", md: "22%" },
                        borderRight: { xs: "none", md: "1px solid #ddd" },
                        borderBottom: { xs: "none", md: "1px solid #ddd" },
                        paddingRight: 2,

                    }}
                >
                    <Box sx={{ borderBottom: "1px solid #ddd", paddingBottom: 2 }} className="mt-3">
                        <Box
                            display="flex"
                            alignItems="center"
                            gap={2}
                            sx={{ background: "#E8F0FE", borderRadius: "0px 40px 40px 0", padding: 1 }}
                        >
                            <HomeIcon className="fs-5" />
                            <Typography>Home</Typography>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            gap={2}
                            sx={{ padding: 1, marginTop: 1 }}
                        >
                            <CalendarTodayIcon className="fs-5" />
                            <Typography>Calendar</Typography>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            gap={2}
                            sx={{ padding: 1, marginTop: 1 }}>
                            <GradingIcon className="fs-5" />
                            <Typography>Enroll</Typography>
                        </Box>
                    </Box>
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
                <Box flexGrow={1}>
                    <Box className="mt-3"
                        display="flex"
                        sx={{ borderBottom: "1px solid #ddd", paddingBottom: 2 }}>
                        <Button onClick={()=>Navigate ("stream")}>
                            <Typography sx={{ textTransform: "none" }} className="mx-3">Stream</Typography>
                        </Button>
                        <Button onClick={() => Navigate("/class-work")}>
                            <Typography sx={{ color: "#007bff", textTransform: "none" }}>
                                Classwork
                            </Typography>
                        </Button>
                        <Button onClick={() => Navigate("/people")}>
                            <Typography sx={{ textTransform: "none" }} className="ms-3">People</Typography>
                        </Button>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
                        <Box className="container" sx={{ width: { xs: "100%", sm: "50%", md: "75%" } }}>
                            <Box className='mt-3'>
                                <Typography variant="h5" className="text-dark mt-3" sx={{ borderBottom: "1px solid #ddd", paddingBottom: 2 }}>Teachers</Typography>
                            </Box>
                            {Teachers.map((teacher) => (
                                <Box display="flex" alignItems="center" gap={2} sx={{ borderBottom: "1px solid #ddd", paddingBottom: 2 }} className='my-3'>
                                    <Box key={teacher.id} display="flex" alignItems="center" gap={1}>
                                        <Box className="text-white rounded-5 d-flex justify-content-center align-items-center"
                                            sx={{ width: 32, height: 32, backgroundColor: "#007bff" }}>
                                            <img src={teacher.image} alt={teacher.name} className="rounded-5" />
                                        </Box>
                                        <Box>
                                            <Typography>{teacher.name}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                            <Box className="d-flex justify-content-center align-items-center text-center">
                                <Button sx={{ textTransform: 'none' }}>View All</Button>
                            </Box>
                            <Box className='d-flex justify-content-between' sx={{ borderBottom: "1px solid #ddd", paddingBottom: 2 }} >
                                <Typography variant="h5" className="text-dark">Classmates</Typography>
                                <Typography variant="body2"> 5 Students</Typography>
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
            </Box>
        </>
    )
}

export default Classwork