import { Box, Card, CardContent, IconButton, Typography, Grid } from '@mui/material';
import React from 'react';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HomeIcon from "@mui/icons-material/Home";
import GradingIcon from "@mui/icons-material/Grading";
import WebDev from '../../assets/Cohort S2.jpg';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

const Dashboard = () => {
  const classRooms = [
    { id: 1, name: "Web Dev Frontend S02" },
    { id: 2, name: "English Communication" },
    { id: 3, name: "WordPress" },
  ];

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

        <Box sx={{ flexGrow: 1, padding: 3 }}>
          <Grid container spacing={3} justifyContent="center">
            {classRooms.map((classRoom) => (
              <Grid item xs={12} sm={6} md={4} key={classRoom.id}>
                <Card sx={{ borderRadius: 2, overflow: "hidden", boxShadow: 3, height: '300'}}>
                  <img src={WebDev} alt="web dev" style={{  width: '100%', height: '200px', objectFit: 'cover'
                    }}/>
                  <Box
                    sx={{
                      position: "relative",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "auto",
                      padding: "16px",
                      color: "#fff",
                      marginTop: "-200px",
                    }}
                  >
                    <Typography variant="h5" fontWeight="bold">
                      {classRoom.name}
                    </Typography>
                    <Typography variant="body2">Cohort 2 - Kingri</Typography>
                    <Typography variant="body2" className='mt-2' mt={1} fontWeight="bold">
                      xWave Team
                    </Typography>
                    <IconButton
                      sx={{
                        position: "absolute",
                        top: 5,
                        right: 5,
                        color: "#fff",
                        background: "rgba(0,0,0,0.3)",
                      }}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  </Box>

                  <CardContent className='mt-5 pt-5'>
                    <Typography variant="body2" color="textSecondary">
                      Due tomorrow
                    </Typography>
                    <Typography variant="body2" fontWeight="bold">
                      11:59 PM – Group 1 (Google Cl...)
                    </Typography>

                    <Box display="end" mt={2} sx={{ borderTop: "1px solid #ddd", paddingBottom: 2 }} className="mt-4">
                      <IconButton>
                        <FolderOpenIcon />
                      </IconButton>
                      <IconButton>
                        <AssignmentIndIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
