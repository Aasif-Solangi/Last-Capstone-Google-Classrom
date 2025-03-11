import React, { useState, useEffect } from "react";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HomeIcon from "@mui/icons-material/Home";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GradingIcon from "@mui/icons-material/Grading";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ArticleIcon from '@mui/icons-material/Article';
import MessageIcon from '@mui/icons-material/Message';

const classWork = [
    {
        id: 1,
        name: "Web Dev Frontend S02",
        topics: ["All Topics", "Final Capstone Project", "Capstone Project"],
        classWorkDetail: [
            { id: 1, name: "Git and GitHub Practice" },
            { id: 2, name: "HTML Basics Assignment" },
            { id: 3, name: "CSS Styling Assignment" },
            { id: 4, name: "JavaScript Fundamentals Assignment" },
            { id: 5, name: "React Components Assignment" },
            { id: 6, name: "State Management Assignment" },
            { id: 7, name: "API Integration Assignment" },
            { id: 8, name: "Final Project Submission" }
        ]
    },
    {
        id: 2,
        name: "English Communication",
        topics: ["All Topics", "Grammar", "Vocabulary"],
        classWorkDetail: [
            { id: 1, name: "Grammar: Tenses Practice" },
            { id: 2, name: "Grammar: Sentence Structure" },
            { id: 3, name: "Grammar: Articles and Prepositions" },
            { id: 4, name: "Grammar: Active and Passive Voice" },
            { id: 5, name: "Grammar: Direct and Indirect Speech" },
            { id: 6, name: "Vocabulary: Synonyms and Antonyms" },
            { id: 7, name: "Vocabulary: Word Formation" },
            { id: 8, name: "Vocabulary: Idioms and Phrases" }
        ]
    },
    {
        id: 3,
        name: "WordPress",
        topics: ["All Topics", "Theme Development", "Plugin Development"],
        classWorkDetail: [
            { id: 1, name: "Theme Development: Basic Structure" },
            { id: 2, name: "Theme Development: Custom Templates" },
            { id: 3, name: "Theme Development: Widgets and Sidebars" },
            { id: 4, name: "Theme Development: Responsive Design" },
            { id: 5, name: "Theme Development: Theme Customization" },
            { id: 6, name: "Plugin Development: Basics" },
            { id: 7, name: "Plugin Development: Custom Shortcodes" },
            { id: 8, name: "Plugin Development: AJAX Integration" }
        ]
    },
    {
        id: 4,
        name: "English 01",
        topics: ["All Topics", "Speaking", "Listening"],
        classWorkDetail: [
            { id: 1, name: "Speaking: Daily Conversations" },
            { id: 2, name: "Speaking: Role Play Activities" },
            { id: 3, name: "Speaking: Public Speaking Practice" },
            { id: 4, name: "Speaking: Pronunciation Drills" },
            { id: 5, name: "Speaking: Group Discussions" },
            { id: 6, name: "Listening: Audio Comprehension" },
            { id: 7, name: "Listening: Note-Taking Practice" },
            { id: 8, name: "Listening: Accent Training" }
        ]
    },
    {
        id: 5,
        name: "Professional Development",
        topics: ["All Topics", "Resume Building", "Interview Skills"],
        classWorkDetail: [
            { id: 1, name: "Resume Building: Basic Structure" },
            { id: 2, name: "Resume Building: Tailoring for Jobs" },
            { id: 3, name: "Resume Building: Highlighting Achievements" },
            { id: 4, name: "Resume Building: Cover Letter Writing" },
            { id: 5, name: "Resume Building: LinkedIn Profile Optimization" },
            { id: 6, name: "Interview Skills: Common Questions" },
            { id: 7, name: "Interview Skills: STAR Technique" },
            { id: 8, name: "Interview Skills: Mock Interviews" }
        ]
    },
    {
        id: 6,
        name: "Frontend S01",
        topics: ["All Topics", "React", "JavaScript"],
        classWorkDetail: [
            { id: 1, name: "React: JSX Basics" },
            { id: 2, name: "React: Component Lifecycle" },
            { id: 3, name: "React: State and Props" },
            { id: 4, name: "React: Hooks and Context API" },
            { id: 5, name: "React: Routing with React Router" },
            { id: 6, name: "JavaScript: ES6 Features" },
            { id: 7, name: "JavaScript: DOM Manipulation" },
            { id: 8, name: "JavaScript: Async Programming" }
        ]
    },
    {
        id: 7,
        name: "xWave Digital",
        topics: ["All Topics", "Digital Literacy", "Basic Computing", "Internet Safety", "Online Communication"],
        classWorkDetail: [
            { id: 1, name: "Digital Literacy: Basics of Computers" },
            { id: 2, name: "Digital Literacy: Operating Systems" },
            { id: 3, name: "Digital Literacy: File Management" },
            { id: 4, name: "Digital Literacy: Internet Basics" },
            { id: 5, name: "Digital Literacy: Online Research Skills" },
            { id: 6, name: "Basic Computing: Word Processing" },
            { id: 7, name: "Basic Computing: Spreadsheets" },
            { id: 8, name: "Basic Computing: Presentations" }
        ]
    }
];

const classRooms = [
    { id: 1, name: "Web Dev Frontend S02" },
    { id: 2, name: "English Communication" },
    { id: 3, name: "WordPress" },
    { id: 4, name: "English 01" },
    { id: 5, name: "Professional Development" },
    { id: 6, name: "Web Dev Frontend S01" },
    { id: 7, name: "xWave Digital Literacy (Sindhi)" }
];

const Recordings = [
    { id: 1, name: "Capstone 1 Evaluations Part 2 (13 june...)" },
    { id: 2, name: "Capstone 1 Evaluations Part 1 (12 june...)" }
];

const Classwork = () => {
    const { classId } = useParams();
    const navigate = useNavigate();

    const [foundClassWork, setFoundClassWork] = useState(null);
    const [selectedTopic, setSelectedTopic] = useState("All Topics");
    const [filteredWorkDetail, setFilteredWorkDetail] = useState([]);

    useEffect(() => {
        if (classId) {
            const foundClass = classWork.find((classWork) => classWork.id === parseInt(classId));
            if (foundClass) {
                setFoundClassWork(foundClass);
                setFilteredWorkDetail(foundClass.classWorkDetail);
            } else {
                setFoundClassWork(null);
                setFilteredWorkDetail([]);
            }
        }
    }, [classId]);

    const handleTopicChange = (event) => {
        const topic = event.target.value;
        setSelectedTopic(topic);

        if (!foundClassWork) return;

        if (topic === "All Topics") {
            setFilteredWorkDetail(foundClassWork.classWorkDetail);
        } else {
            const filtered = foundClassWork.classWorkDetail.filter((work) =>
                work.name.toLowerCase().includes(topic.toLowerCase())
            );
            setFilteredWorkDetail(filtered);
        }
    };

    const handleClassClick = (classId) => {
        navigate(`/class-work/${classId}`);
    };

    if (!foundClassWork) {
        return <Typography>Class not found.</Typography>;
    }

    return (
        <>
            <Box className="mt-5"
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                sx={{ gap: 2 }}>

                <Box
                    sx={{
                        width: { xs: "100%", md: "22%" },
                        borderRight: { xs: "none", md: "1px solid #ddd" },
                        borderBottom: { xs: "none", md: "1px solid #ddd" },
                    }}>
                    <Box sx={{ borderBottom: "1px solid #ddd", paddingBottom: 2 }} className="mt-4">
                        <Box display="flex" alignItems="center" gap={2} onClick={() => navigate("/")} sx={{ cursor: 'pointer', background: "#E8F0FE", borderRadius: "0px 40px 40px 0" }}>
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
                    <Box className='mx-3'>
                        <Typography sx={{ marginTop: 3, marginBottom: 2, fontWeight: "bold" }}>
                            To-do
                        </Typography>
                        {classRooms.map((classRoom) => (
                            <Box
                                key={classRoom.id}
                                display="flex"
                                alignItems="center"
                                gap={2}
                                sx={{ marginBottom: 2, cursor: "pointer" }}
                                onClick={() => handleClassClick(classRoom.id)}>
                                <Box
                                    className="text-white rounded-5 d-flex justify-content-center align-items-center"
                                    sx={{ width: 32, height: 32, backgroundColor: "#007bff" }} >
                                    {classRoom.name.charAt(0)}
                                </Box>
                                <Typography>{classRoom.name}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Main Content */}
                <Box flexGrow={1}>
                    <Box className="mt-3 pt-3"
                        display="flex" sx={{ borderBottom: "1px solid #ddd" }}>
                        <Button onClick={() => navigate("/stream")}>
                            <Typography sx={{ textTransform: "none" }} className="mx-3 text-secondary">Stream</Typography>
                        </Button>
                        <Button
                            onClick={() => navigate(`/class-work/${classId}`)}
                            sx={{
                                borderBottom: "3px solid rgb(18, 43, 231)",
                                borderRadius: "0",
                            }}>
                            <Typography sx={{ color: "#007bff", textTransform: "none" }}>
                                Classwork
                            </Typography>
                        </Button>

                        <Button onClick={() => navigate("/people")}>
                            <Typography sx={{ textTransform: "none" }} className="ms-3 text-secondary">People</Typography>
                        </Button>
                    </Box>

                    {/* Classwork Details */}
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
                        <Box className="container" sx={{ width: { xs: "100%", sm: "50%", md: "75%" } }}>
                            <Button className="d-flex justify-content-between gap-2 mt-2" variant="text">
                                <AssignmentIndIcon className="fs-5 " />
                                <Button sx={{ textTransform: 'none' }} className="fs-6">View your work</Button>
                            </Button>

                            <TextField
                                className="text-dark w-50 my-3"
                                select
                                sx={{ flex: 1, minWidth: "200px" }}
                                value={selectedTopic}
                                onChange={handleTopicChange}>
                                {foundClassWork.topics.map((topic) => (
                                    <MenuItem key={topic} value={topic}>{topic}</MenuItem>
                                ))}
                            </TextField>

                            {filteredWorkDetail.map((workDetail) => (
                                <Box sx={{ borderBottom: "1px solid #ddd" }} key={workDetail.id} className='my-3 pt-3 d-flex justify-content-between'>
                                    <Box class='d-flex justify-content-between align-items-center gap-2 py-2'>
                                        <Box className="text-white rounded-5 d-flex justify-content-center align-items-center"
                                            sx={{ width: 32, height: 32, backgroundColor: "#007bff" }}>
                                            <ArticleIcon />
                                        </Box>
                                        <Box>
                                            <Typography>{workDetail.name}</Typography>
                                        </Box>
                                    </Box>
                                    <Typography variant="body2"><MoreVertIcon /></Typography>
                                </Box>
                            ))}

                            {parseInt(classId) === 1 && (
                                <>
                                    {Recordings.map((record) => (
                                        <Box display="flex" alignItems="center" gap={2} sx={{ borderBottom: "1px solid #ddd", paddingBottom: 2 }} className='my-3'>
                                            <Box key={record.id} display="flex" alignItems="center" gap={1}>
                                                <Box className="text-white py-3 rounded-5 d-flex justify-content-center align-items-center"
                                                    sx={{ width: 32, height: 32, backgroundColor: "#BDBDBE" }}>
                                                    <ArticleIcon />
                                                </Box>
                                                <Box>
                                                    <Typography>{record.name}</Typography>
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
                                                <Typography>Template Assignment <MessageIcon className="fs-5 ms-2 text-secondary" /> 17</Typography>
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
                                    <Box gap={2} className='my-3 d-flex justify-content-between' sx={{ paddingBottom: 2 }} >
                                        <Box class='d-flex justify-content-between align-items-center gap-2'>
                                            <Box className="text-white rounded-5 d-flex justify-content-center align-items-center py-3"
                                                sx={{ width: 32, height: 32, backgroundColor: "#007bff" }}>
                                                <ArticleIcon />
                                            </Box>
                                            <Box>
                                                <Typography>Group 1</Typography>
                                            </Box>
                                        </Box>
                                        <Typography variant="body2"> No Due <MoreVertIcon /></Typography>
                                    </Box>
                                </>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Classwork;