import React, { useState } from "react";
import { Box, Button, Card, Tooltip, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArticleIcon from '@mui/icons-material/Article';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GradingIcon from "@mui/icons-material/Grading";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router";

const Instructions = () => {
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

  const [assignments] = useState([
    { id: "1", text: " Announce something to your class", date: "" },
  ]);

  const navigate = useNavigate();

  return (
    <>
      <Box className="mt-5"
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        sx={{ gap: 2 }} >
        <Box
          sx={{
            width: { xs: "100%", md: "22%" },
            borderRight: { xs: "none", md: "1px solid #ddd" },
            borderBottom: { xs: "none", md: "1px solid #ddd" },
          }}   >
          <Box sx={{ borderBottom: "1px solid #ddd", paddingBottom: 2 }} className="mt-4">
            <Box display="flex" alignItems="center" gap={2} sx={{ background: "#E8F0FE", borderRadius: "0px 40px 40px 0" }}>
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
          <Box className="mt-3 pt-3"
            display="flex" sx={{ borderBottom: "1px solid #ddd" }}>
            <Button onClick={() => navigate("/instructions")} sx={{ borderRadius: '0', }}>
              <Typography sx={{borderBottom: "3px solid rgb(18, 43, 231)", textTransform: "none", color: "#007bff" }} className="mx-3">Instructions</Typography>
            </Button>
            <Button onClick={() => navigate("/student-work")}>
              <Typography  className="text-secondary"  sx={{textTransform: "none" }}>
                Student Work
              </Typography>
            </Button>
          </Box>


          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }} className='mt-3'>
            <Box className="flex-grow-1 mt-4" sx={{ width: { xs: "100%", sm: "50%", md: "75%" } }}>
              {assignments.map((assignment) => (
                <Box sx={{ cursor: 'pointer' }} flex={1} key={assignment.id} className="my-4">
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

                      <Tooltip title="More Options" placement="top">
                        <MoreVertIcon
                          sx={{ marginLeft: 'auto', cursor: 'pointer' }}
                          className="me-3" />
                      </Tooltip>
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

export default Instructions;