import { Box, Card, CardContent, IconButton, Typography, Grid } from '@mui/material';
import React from 'react';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

const Dashboard = () => {
  const classRooms = [
    { id: 1, name: "Web Dev Frontend S02" },
    { id: 2, name: "English Communication" },
    { id: 3, name: "WordPress" },
  ];

  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={3} justifyContent="center">
        {classRooms.map((classRoom) => (
          <Grid item xs={12} sm={6} md={4} key={classRoom.id}>
            <Card sx={{ borderRadius: 2, overflow: "hidden", boxShadow: 3 }}>
              <Box
                sx={{
                  height: 120,
                  backgroundImage: "url('/card.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  p: 2,
                  color: "#fff",
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  {classRoom.name}
                </Typography>
                <Typography variant="body2">Cohort 2 - Kingri</Typography>
                <Typography variant="body2" mt={1} fontWeight="bold">
                  xWave Team
                </Typography>
                <IconButton
                  sx={{ position: "absolute", top: 5, right: 5, color: "#fff", background: "rgba(0,0,0,0.3)" }}
                >
                  <MoreVertIcon />
                </IconButton>
              </Box>

              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  Due tomorrow
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                  11:59 PM – Group 1 (Google Cl...)
                </Typography>

                <Box display="flex" justifyContent="space-between" mt={2}>
                  <IconButton>
                    <InsertPhotoIcon />
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
  );
};

export default Dashboard;
