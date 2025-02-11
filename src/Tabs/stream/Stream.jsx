import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HomeIcon from "@mui/icons-material/Home";
import GradingIcon from "@mui/icons-material/Grading";
import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material";
import BgImg from "../../assets/bg.png";
import ArticleIcon from '@mui/icons-material/Article';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MeetIcon from '../../assets/meet-icon.png'
import { useNavigate } from "react-router";

const Stream = () => {
  const classRooms = [
    { id: 1, name: "Web Dev Frontend S02" },
    { id: 2, name: "English Communication" },
    { id: 3, name: "WordPress" },
    { id: 4, name: "English 01" },
    { id: 5, name: "Professional Development" },
    { id: 6, name: "Web Dev Frontend S01" },
    { id: 7, name: "English Communication" },
    { id: 8, name: "Xwave Digital Literacy (Sindhi)" },
  ];

  const assignments = [
    { id: '1', text: 'Announce something to your class', date: '' },
    { id: '2', text: 'xWave posted a new assignment: Group 2 (Booking.com Clone)', date: '17 Jan' },
    { id: '3', text: 'Share exciting updates with your class!', date: '22 Jan' },
    { id: '4', text: 'Post an important announcement for your class!', date: '25 Jan' },
    { id: '5', text: 'Let your class know about the latest updates!', date: '26 Jan' },
    { id: '6', text: 'Keep your class informed with a new announcement!', date: '28 Jan' }
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
            <Box display="flex" alignItems="center" gap={2} sx={{ background: "#E8F0FE", borderRadius: "0px 40px 40px 0" }}  >
              <Button sx={{ textTransform: 'none', color: 'black' }} onClick={(() => navigate("/"))}>
                <Box className='ms-3 d-flex justify-content-center align-items-center text-center' gap={2}>
                  <HomeIcon className="fs-5" />
                  <Typography >Home</Typography>
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
          <Box className='mx-3'>
            <Typography sx={{ marginTop: 3, marginBottom: 2, fontWeight: "bold" }}>
              To-do
            </Typography>
            {classRooms.map((classRoom) => (
              <Box key={classRoom.id}
                display="flex"
                alignItems="center"
                gap={2}
                sx={{ marginBottom: 2, cursor: "pointer" }}
                onClick={() => navigate(`/class-detail/${classRoom.id}`)}>
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
          <Box className="mt-3 pt-2"
            display="flex" sx={{ borderBottom: "1px solid #ddd" }}>
            <Button onClick={() => navigate("/stream")} sx={{ borderBottom: "3px solid rgb(18, 43, 231)", }}>
              <Typography sx={{ textTransform: "none" }} className="mx-3">Stream</Typography>
            </Button>
            <Button onClick={() => navigate("/class-work")}>
              <Typography sx={{ color: "#007bff", textTransform: "none" }}>
                Classwork
              </Typography>
            </Button>
            <Button onClick={() => navigate("/people")}>
              <Typography sx={{ textTransform: "none" }} className="ms-3">People</Typography>
            </Button>
          </Box>
          <Box sx={{ marginTop: 1, textAlign: "center" }}>
            <img src={BgImg} alt="Background" style={{ maxWidth: "100%", height: "auto" }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
            <Box sx={{ width: { xs: "100%", sm: "50%", md: "25%" } }}>
              <Card className="mt-4 py-2 px-3 py-4">
                <Typography variant="h6" fontWeight="bold">
                  <Box className="d-flex justify-content-between align-content-center">
                    <img src={MeetIcon} width={30} alt="Icon" />
                    Meet
                    <Typography>
                      <MoreVertIcon sx={{ marginLeft: 'auto' }} className="me-3" />
                    </Typography>
                  </Box>
                </Typography>
                <Button variant="contained" color="primary" sx={{ marginTop: 2, width: '100%' }}>
                  Join
                </Button>
              </Card>
              <Card className="mt-3 py-2 d-none d-sm-block">
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    Upcoming
                  </Typography>
                  <Typography sx={{ color: "#6c757d" }}>
                    Woohoo, no work due soon!
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            <Box className="flex-grow-1" sx={{ width: { xs: "100%", sm: "50%", md: "75%" } }}>
              {assignments.map((assignment) => (
                <Box flex={1} key={assignment.id} className="my-4">
                  <Card>
                    <Box className="py-2 d-flex align-items-center gap-3 ms-2">
                      <Box className="text-white rounded-5 d-flex justify-content-center align-items-center py-3"
                        sx={{ width: 32, height: 32, backgroundColor: "#007bff" }}>
                        <ArticleIcon />
                      </Box>
                      <Box>
                        <Typography variant="body1">{assignment.text}</Typography>
                        <Typography variant="body2" color="textSecondary">
                          {assignment.date || 'No Date Available'}
                        </Typography>
                      </Box>
                      <MoreVertIcon sx={{ marginLeft: 'auto' }} className="me-3" />
                    </Box>
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Stream;
