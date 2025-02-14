import React from 'react';
import { Link } from 'react-router-dom';
import ImgNotFound from '../../assets/404.png';
import { Box, Button, Typography } from '@mui/material';

const PageNotFound = () => {
  return (
    <Box sx={{height: '94vh'}} className="bg-danger flex flex-col items-center justify-center min-h-screen text-center pt-5 mt-5 ">
      <img
        src={ImgNotFound}
        alt="Page Not Found"
        className="w-80 md:w-96 mb-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
      />
      <Typography className="text-white mt-4">404 - Page Not Found</Typography>
      <Typography className="text-white py-3">Oops! The page you are looking for does not exist or has been moved.</Typography>
      <Button variant='contained' color="primary" className="px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition">
        <Link
          to="/" className="text-white text-lg font-semibold no-underline">
          Go Back Home
        </Link>
      </Button>
    </Box>
  );
};

export default PageNotFound;
