import React, { useState, useEffect } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Box, Button, Typography } from "@mui/material";
import GradingIcon from "@mui/icons-material/Grading";
import TAImage from '../../assets/TA-profile.png';
import HomeIcon from "@mui/icons-material/Home";
import xWave from '../../assets/xWave.png';
import Profile from '../../assets/Asif.png';
import Developer from '../../assets/Sir.png';
import Abuzar from '../../assets/Abuzar.jpg';
import Ayaz from '../../assets/smile.jpg';
import Haris from '../../assets/Haris.jpg';
import Arif from '../../assets/arif.jpg';
import Asvad from '../../assets/Asvad Sageer.gif';
import SirMuddasir from '../../assets/Sir Muddasir.jpg';
import SirBilal from '../../assets/Bilal.png';
import { useNavigate } from "react-router-dom";

const People = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedClass(null);
  }, []);

  const classRooms = [
    { id: 1, name: "Web Dev Frontend S02", teachers: [{ name: "xWave Team", image: xWave }, { name: "Ijaz Liaqat", image: Developer }, { name: "Mudasir Rehman", image: SirMuddasir }, { name: "Muhammad Rashid" }] },
    { id: 2, name: "English Communication", teachers: [{ name: "Shazia Gul" }, { name: "Urooj Memon" }] },
    { id: 3, name: "WordPress", teachers: [{ name: "Bilal Khosa", image: SirBilal }, { name: "Sania Ijaz" }] },
    { id: 4, name: "English 01", teachers: [{ name: "Shazia Gul" }] },
    { id: 5, name: "Professional Development", teachers: [{ name: "Wardha Noor" }, { name: "Abeera Khan" }] },
    { id: 6, name: "Web Dev Frontend S01", teachers: [{ name: "Ijaz Liaqat", image: Developer }, { name: "Kainat Fareed", image: TAImage },{ name: "Mudasir Rehman", image: SirMuddasir }]},
    { id: 7, name: "xWave Digital Literacy (Sindhi)", teachers: [ { name: "Asvad Sagheer", image: Asvad }] }
  ];

  const Students = [
    { id: 1, name: "Aasif Ali", image: Profile },
    { id: 2, name: "Abuzar Ali", image: Abuzar },
    { id: 3, name: "Ayaz", image: Ayaz },
    { id: 5, name: "Muhammad Aurif", image: Arif },
    { id: 6, name: "Muhammad Haris", image: Haris }
  ];

  const handleClassClick = (classId) => {
    setSelectedClass(classId);
  };

  const selectedClassData = classRooms.find(classRoom => classRoom.id === selectedClass);

  const getUniqueTeachers = () => {
    const allTeachers = classRooms.flatMap(classRoom => classRoom.teachers);
    const uniqueTeachers = [];
    const seenNames = new Set();

    for (const teacher of allTeachers) {
      if (teacher.name === "xWave Academy") {
        if (!seenNames.has("xWave Academy")) {
          uniqueTeachers.push(teacher);
          seenNames.add("xWave Academy");
        }
      } else {
        if (!seenNames.has(teacher.name)) {
          uniqueTeachers.push(teacher);
          seenNames.add(teacher.name);
        }
      }
    }

    return uniqueTeachers;
  };

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
          }}
        >
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
            <Button onClick={() => navigate("/stream")}>
              <Typography sx={{ textTransform: "none" }} className="mx-3 text-secondary">Stream</Typography>
            </Button>
            <Button onClick={() => navigate(`/class-work/${classRooms[0].id}`)}>
              <Typography className="text-secondary" sx={{ color: "#007bff", textTransform: "none" }}>
                Classwork
              </Typography>
            </Button>
            <Button className='ms-3' onClick={() => navigate("/people")} sx={{
              borderBottom: "3px solid rgb(18, 43, 231)",
              borderRadius: "0",
            }}>
              <Typography sx={{ textTransform: "none" }}>People</Typography>
            </Button>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
            <Box className="container" sx={{ width: { xs: "100%", sm: "50%", md: "75%" } }}>
              <Box className='mt-3'>
                <Typography variant="h5" className="text-dark mt-3" sx={{ borderBottom: "1px solid #ddd", paddingBottom: 2 }}>
                  {selectedClassData ? `${selectedClassData.name} - Teachers` : "Teachers"}
                </Typography>
              </Box>
              {selectedClassData ? (
                selectedClassData.teachers.map((teacher, index) => (
                  <Box key={index} display="flex" alignItems="center" gap={2} sx={{ borderBottom: "1px solid #ddd", paddingBottom: 2 }} className='my-3'>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Box className="text-white rounded-5 d-flex justify-content-center align-items-center"
                        sx={{ width: 32, height: 32, backgroundColor: "#007bff" }}>
                        {teacher.image ? (
                          <img src={teacher.image} alt={teacher.name} className="rounded-5" />
                        ) : (
                          <Typography>{teacher.name.charAt(0)}</Typography>
                        )}
                      </Box>
                      <Box>
                        <Typography>{teacher.name}</Typography>
                      </Box>
                    </Box>
                  </Box>
                ))
              ) : (
                getUniqueTeachers().map((teacher, index) => (
                  <Box key={index} display="flex" alignItems="center" gap={2} sx={{ borderBottom: "1px solid #ddd", paddingBottom: 2 }} className='my-3'>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Box className="text-white rounded-5 d-flex justify-content-center align-items-center"
                        sx={{ width: 32, height: 32, backgroundColor: "#007bff" }}>
                        {teacher.image ? (
                          <img src={teacher.image} alt={teacher.name} className="rounded-5" />
                        ) : (
                          <Typography>{teacher.name.charAt(0)}</Typography>
                        )}
                      </Box>
                      <Box>
                        <Typography>{teacher.name}</Typography>
                      </Box>
                    </Box>
                  </Box>
                ))
              )}
              <Box className="d-flex justify-content-center align-items-center text-center">
                <Button className="fs-6" sx={{ textTransform: 'none' }}>View All</Button>
              </Box>
              <Box className='d-flex justify-content-between' sx={{ borderBottom: "1px solid #ddd", paddingBottom: 2 }} >
                <Typography variant="h5" className="text-dark">Classmates</Typography>
                <Typography className="fs-6" variant="body2"> 5 Students</Typography>
              </Box>

              {Students.map((student) => (
                <Box key={student.id} display="flex" alignItems="center" gap={2} sx={{ borderBottom: "1px solid #ddd", paddingBottom: 2 }} className='my-3'>
                  <Box display="flex" alignItems="center" gap={1}>
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
  );
};

export default People;