import React from "react";
import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const Home = () => {
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
                </Box>

            </Box>
        </>
    );
};

export default Home;
