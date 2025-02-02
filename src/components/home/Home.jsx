import { Box, Typography } from '@mui/material'
import React from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const Home = () => {
    return (
        <>
            <Box>
                <Card>
                    <Box className='d-flex'>
                        <Box>
                            <Typography>Web Dev Frontend SO2</Typography>
                            <Typography>Cohort 2 - Kingri</Typography>
                            <Typography className='mt-2'>xWave Team</Typography>
                        </Box>
                        <Box><ArticleIcon /></Box>
                    </Box>
                    <Typography>Due Tomorrow</Typography>

                    <Box>
                        <AssignmentIndIcon />
                    </Box>
                </Card>
            </Box>
        </>
    )
}

export default Home