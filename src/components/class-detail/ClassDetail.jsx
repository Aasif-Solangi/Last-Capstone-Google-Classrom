import React, { useState, useEffect } from "react";
import { Box, Button, Card, CardContent, Menu, MenuItem, Modal, TextField, Tooltip, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useNavigate, useParams } from "react-router-dom";
import ArticleIcon from '@mui/icons-material/Article';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GradingIcon from "@mui/icons-material/Grading";
import MeetIcon from '../../assets/meet-icon.png';
import HomeIcon from "@mui/icons-material/Home";
import BgImgTech from "../../assets/S1.jpg";
import English from '../../assets/English.jpg';
import WP from '../../assets/WordPress.jpg';

const ClassDetail = () => {

  const classRooms = [
    {
      id: 1,
      name: "Web Dev Frontend S02",
      image: BgImgTech,
      assignments: [
        { id: '1', text: 'Class Update: Important Announcements Inside!', date: '05 Feb' },
        { id: '2', text: 'xWave: Build Your Own Travel Booking Website! (Group 2)', date: '12 Feb' },
        { id: '3', text: 'UI/UX Challenge: Design an Engaging Landing Page', date: '18 Feb' },
        { id: '4', text: 'Research Task: Explore Emerging Web Technologies', date: '01 Mar' },
        { id: '5', text: 'Creative Project: Build a Portfolio Using React.js!', date: '10 Mar' }
      ],
    },
    {
      id: 2,
      name: "English Communication",
      image: English,
      assignments: [
        { id: '1', text: 'Write a short essay on "The Power of Effective Communication"', date: '05 Feb' },
        { id: '2', text: 'Analyze and summarize a TED Talk of your choice', date: '12 Feb' },
        { id: '3', text: 'Grammar Challenge: Identify and correct 10 common mistakes', date: '20 Feb' },
        { id: '4', text: 'Debate Preparation: Prepare arguments for a discussion on "Social Media Influence"', date: '01 Mar' },
        { id: '5', text: 'Creative Writing: Write a short story using given prompts', date: '10 Mar' }
      ],
    },
    {
      id: 3,
      name: "WordPress",
      image: WP,
      assignments: [
        { id: "1", text: "Add essential pages (Home, Destinations, About, Contact, Blog)", date: "" },
        { id: "2", text: "Create an eye-catching homepage with a featured blog post section", date: "17 Jan" },
        { id: "3", text: "Write at least three travel blog posts with featured images", date: "3 Mar" },
        { id: "4", text: "Install and configure plugins for SEO, contact forms, and social media integration", date: "20 feb" },
        { id: "5", text: "Ensure the website looks great on all devices.!", date: "2 feb" }
      ],
    },
    {
      id: 4,
      name: "English 01",
      image: English,
      assignments: [
        { id: "1", text: "English Speaking practice", date: "" },
        { id: "2", text: "Write an essay about xWave with 1000 words", date: "17 Jan" },
        { id: "3", text: "Tell me about Frontend Technologies in English", date: "20 frb" },
        { id: "4", text: "Write paragraph about your journey at xWave", date: "3 Mar" },
        { id: "5", text: "What is the deference between British English and American English", Date: "2 feb" }
      ],
    },
    {
      id: 5,
      name: "Professional Development",
      image: English,
      assignments: [
        { id: "1", text: "Class Announcement: Important Updates & Guidelines", date: "05 Feb" },
        { id: "2", text: "xWave: Develop a Feature-Rich Travel Booking Platform (Group 2)", date: "12 Feb" },
        { id: "3", text: "Market Analysis: Research & Present Key Web Trends", date: "20 Feb" },
        { id: "4", text: "Code Review & Optimization: Submit Your Best Practices", date: "01 Mar" },
        { id: "5", text: "Portfolio Enhancement: Build a Dynamic React Project", date: "10 Mar" }
      ],
    },
    {
      id: 6,
      name: "Web Dev Frontend S01",
      image: BgImgTech,
      assignments: [
        { id: "1", text: "Class Update: Important Announcements Inside!", date: "05 Feb" },
        { id: "2", text: "xWave: Build Your Own Travel Booking Website! (Group 2)", date: "12 Feb" },
        { id: "3", text: "UI/UX Challenge: Design an Engaging Landing Page", date: "18 Feb" },
        { id: "4", text: "Research Task: Explore Emerging Web Technologies", date: "01 Mar" },
        { id: "5", text: "Creative Project: Build a Portfolio Using React.js!", date: "10 Mar" }
      ],
    },
    {
      id: 7,
      name: "xWave Digital Literacy",
      image: English,
      assignments: [
        { id: "1", text: "Announce something to your class", date: "" },
        { id: "2", text: "xWave:Design a Modern Travel Portal!", date: "17 Feb" },
        { id: "3", text: "Share exciting updates with your class!", date: "22 Jan" },
        { id: "4", text: "Post an important announcement!", date: "25 Jan" },
        { id: "5", text: "Latest updates for your class!", date: "26 Jan" },
      ],
    },
  ];
  
  const { classId } = useParams();
  const navigate = useNavigate();

  const [selectedClass, setSelectedClass] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editedAssignment, setEditedAssignment] = useState({ id: "", text: "", date: "" });

  useEffect(() => {
    const foundClass = classRooms.find((classRoom) => classRoom.id === parseInt(classId));
    setSelectedClass(foundClass);
  }, [classId]);

  const handleMenuOpen = (event, id) => {
    setAnchorEl(event.currentTarget);
    setSelectedId(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedId(null);
  };

  const handleDelete = (id) => {
    const updatedAssignments = selectedClass.assignments.filter((assignment) => assignment.id !== id);
    setSelectedClass((prevClass) => ({
      ...prevClass,
      assignments: updatedAssignments,
    }));
    handleMenuClose();
  };

  const handleEdit = (id) => {
    const assignmentToEdit = selectedClass.assignments.find((assignment) => assignment.id === id);
    setEditedAssignment(assignmentToEdit);
    setEditModalOpen(true);
    handleMenuClose();
  };

  const handleSaveEdit = () => {
    const updatedAssignments = selectedClass.assignments.map((assignment) =>
      assignment.id === editedAssignment.id ? editedAssignment : assignment
    );
    setSelectedClass((prevClass) => ({
      ...prevClass,
      assignments: updatedAssignments,
    }));
    setEditModalOpen(false);
  };

  const handleCancelEdit = () => {
    setEditModalOpen(false);
  };

  if (!selectedClass) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <>
      <Modal open={editModalOpen} onClose={handleCancelEdit}>
        <Box
          sx={{
            position: "absolute",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400, bgcolor: "background.paper",
            boxShadow: 24, p: 4,
          }}>
          <Typography variant="h6" gutterBottom>
            Edit Assignment
          </Typography>
          <TextField
            label="Assignment Text"
            fullWidth
            value={editedAssignment.text}
            onChange={(e) =>
              setEditedAssignment({ ...editedAssignment, text: e.target.value })
            }
            sx={{ mb: 2 }}
          />
          <TextField
            label="Due Date"
            fullWidth
            value={editedAssignment.date}
            onChange={(e) =>
              setEditedAssignment({ ...editedAssignment, date: e.target.value })
            }
            sx={{ mb: 2 }}
          />
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
            <Button onClick={handleCancelEdit} variant="outlined">
              Cancel
            </Button>
            <Button onClick={handleSaveEdit} variant="contained" color="primary">
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
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
            <Button onClick={() => navigate("/stream")} sx={{ borderRadius: '0', borderBottom: "3px solid rgb(18, 43, 231)", }}>
              <Typography sx={{ textTransform: "none" }} className="mx-3">Stream</Typography>
            </Button>
            <Button onClick={() => navigate(`/class-work/${classId}`)}>
              <Typography sx={{ textTransform: "none" }} className="text-secondary">
                Classwork
              </Typography>
            </Button>
            <Button onClick={() => navigate("/people")}>
              <Typography sx={{ textTransform: "none" }} className="ms-3 text-secondary">People</Typography>
            </Button>
          </Box>

          <Box sx={{ marginTop: 1, textAlign: "start", position: "relative", width: "100%", height: "200px" }}>
            <img src={selectedClass.image}
              alt="Tech"
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
                }}>
                {selectedClass.name}
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
              {selectedClass.assignments.map((assignment) => (
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
                          handleEdit(assignment.id);
                        }}>
                          Edit
                        </MenuItem>
                        <MenuItem onClick={(event) => {
                          event.stopPropagation();
                          handleDelete(assignment.id);
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

export default ClassDetail;