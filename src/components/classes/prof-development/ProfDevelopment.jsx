import React, { useState } from "react";
import { Box, Button, Card, CardContent, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArticleIcon from '@mui/icons-material/Article';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GradingIcon from "@mui/icons-material/Grading";
import MeetIcon from '../../../assets/meet-icon.png';
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate} from "react-router-dom";
import BgImgProf from "../../../assets/English.jpg";

const ProfDevelopment = () => {
  
  const classRooms = [
    { id: 1, name: "Web Dev Frontend S02" },
    { id: 2, name: "English Communication" },
    { id: 3, name: "WordPress" },
    { id: 4, name: "English 01" },
    { id: 5, name: "Professional Development" },
    { id: 6, name: "Web Dev Frontend S01" },
    { id: 7, name: "xWave Digital Literacy (Sindhi)" },
  ];

  const [assignments, setAssignments] = useState([
    { id: '1', text: 'Class Announcement: Important Updates & Guidelines', date: '05 Feb' },
    { id: '2', text: 'xWave: Develop a Feature-Rich Travel Booking Platform (Group 2)', date: '12 Feb' },
    { id: '3', text: 'Market Analysis: Research & Present Key Web Trends', date: '20 Feb' },
    { id: '4', text: 'Code Review & Optimization: Submit Your Best Practices', date: '01 Mar' },
    { id: '5', text: 'Portfolio Enhancement: Build a Dynamic React Project', date: '10 Mar' }
  ]);


  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const handleMenuOpen = (event, id) => {
    setAnchorEl(event.currentTarget);
    setSelectedId(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedId(null);
  };

  const handleDelete = () => {
    setAssignments(assignments.filter(assignment => assignment.id !== selectedId));
    handleMenuClose();
  };

  const navigate = useNavigate();

  return (
    <>
      <Box className="mt-5"
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        sx={{ gap: 2 }} >
        <Box className='d-none d-md-block'
          sx={{
            width: { xs: "100%", md: "22%" },
            borderRight: { xs: "none", md: "1px solid #ddd" },
            borderBottom: { xs: "none", md: "1px solid #ddd" },
          }}>
          <Box sx={{ borderBottom: "1px solid #ddd", paddingBottom: 2 }} className="mt-4">
            <Box display="flex" alignItems="center" gap={2} onClick={(() => navigate("/"))} sx={{ cursor: 'pointer', background: "#E8F0FE", borderRadius: "0px 40px 40px 0" }}>
              <Box className='ms-3 py-2 d-flex justify-content-center align-items-center text-center' gap={2}>
                <HomeIcon className="fs-5 ms-2" />
                <Typography>Home</Typography>
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
                <Typography>Enroll</Typography>
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
            <Button onClick={() => navigate("/stream")} sx={{ borderRadius: '0', borderBottom: "3px solid rgb(18, 43, 231)", }}>
              <Typography sx={{ textTransform: "none" }} className="mx-3">Stream</Typography>
            </Button>
            <Button onClick={() => navigate(`/class-work/${classRooms[0].id}`)}>
              <Typography sx={{ textTransform: "none" }} className="text-secondary">
                Classwork
              </Typography>
            </Button>
            <Button onClick={() => navigate("/people")}>
              <Typography sx={{ textTransform: "none" }} className="ms-3 text-secondary">People</Typography>
            </Button>
          </Box>

          <Box sx={{ marginTop: 1, textAlign: "start", position: "relative", width: "100%", height: "200px" }}>
            <img src={BgImgProf}
              alt="web dev"
              style={{
                width: "100%", height: "120%",
                objectFit: "cover",
              }} />

            <Box
              sx={{
                position: "absolute", top: 70, left: 0,
                width: "100%", height: "100%", color: "#fff",
                display: "flex", flexDirection: "column",
                justifyContent: "center", padding: "16px",
              }}>
              <Typography
                variant="h5" fontWeight="bold"
                sx={{
                  whiteSpace: "nowrap", overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "100%"
                }}>Professional Development
              </Typography>
              <Typography variant="body2" fontWeight="bold" className="fs-4">Kingri C2</Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }} className='mt-3'>
            <Box sx={{ width: { xs: "100%", sm: "50%", md: "25%" } }}>
              <Card className="mt-5 py-2 px-3 py-4">
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
                          className="me-3"
                          onClick={(event) => {
                            event.stopPropagation();
                            handleMenuOpen(event, assignment.id);
                          }}
                        />
                      </Tooltip>

                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl) && selectedId === assignment.id}
                        onClose={handleMenuClose}>
                        <MenuItem onClick={(event) => {
                          event.stopPropagation();
                        }}>
                          Edit
                        </MenuItem>
                        <MenuItem onClick={(event) => {
                          event.stopPropagation();
                          handleDelete();
                        }}>
                          Delete
                        </MenuItem>
                      </Menu>
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

export default ProfDevelopment;