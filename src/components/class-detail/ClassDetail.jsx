  // import React from "react";
  // import { Card, CardContent } from "@/components/ui/card";
  // import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
  // import { Button } from "@/components/ui/button";
  // import { TextField, Typography } from "@mui/material";

  // const ClassDetail = ({ title, details, date, noDueDate }) => {
  //   return (
  //     <Card className="w-full mb-4 shadow-md">
  //       <CardContent className="flex justify-between items-center">
  //         <Box className="flex items-center gap-4">
  //           <Box className="p-2 bg-blue-100 rounded-full">
  //             <Typography className="text-blue-500">📋</Typography>
  //           </Box>
  //           <Box>
  //             <Typography variant="h3" className="font-semibold text-lg">{title}</Typography>
  //             <Typography className="text-sm text-gray-600">{details}</Typography>
  //           </Box>
  //         </Box>
  //         <Box className="text-right">
  //           {noDueDate ? (
  //             <Typography variant="body2" className="text-sm text-gray-500">No due date</Typography>
  //           ) : (
  //             <Typography variant="body2" className="text-sm text-gray-500">{date}</Typography>
  //           )}
  //         </Box>
  //         <DropdownMenu>
  //           <DropdownMenuTrigger>
  //             <Button variant="ghost" className="text-xl">⋮</Button>
  //           </DropdownMenuTrigger>
  //           <DropdownMenuContent>
  //             <DropdownMenuItem>View</DropdownMenuItem>
  //             <DropdownMenuItem>Edit</DropdownMenuItem>
  //             <DropdownMenuItem>Delete</DropdownMenuItem>
  //           </DropdownMenuContent>
  //         </DropdownMenu>
  //       </CardContent>
  //     </Card>
  //   );
  // }; Aasif - Solangi

  // const TaskList = () => {
  //   return (
  //     <Box className="container mx-auto p-4">
  //       <Box className="flex justify-between items-center mb-4">
  //         <Typography className="text-xl font-bold">View your work</Typography>

  //         <TextField
  //           placeholder="Check-in Date"
  //           fullWidth
  //           sx={{ flex: 1, minWidth: "200px" }}
  //           InputProps={{
  //             startAdornment: <CalendarMonthIcon sx={{ mr: 1 }} />,
  //           }} />
  //         <TextField
  //           select
  //           fullWidth
  //           sx={{ flex: 1, minWidth: "200px" }}
  //           value={children}
  //           onChange={handleChildrenChange}
  //           InputProps={{
  //             startAdornment: <PermIdentityIcon sx={{ mr: 1 }} />,
  //           }}
  //         >
  //           <MenuItem value={0}></MenuItem>
  //           <MenuItem value={1}>1 child</MenuItem>
  //           <MenuItem value={2}>2 children</MenuItem>
  //           <MenuItem value={3}>3 children</MenuItem>
  //         </TextField>
  //       </Box>

  //       <Card
  //         title="Git and GitHub Practice"
  //         details="Posted Jun 15, 2024"
  //         noDueDate={true}
  //       />
  //       <Card
  //         title="Capstone 1 Evaluations Part 2"
  //         details="Posted Jun 15, 2024"
  //         date="Due Feb 17, 2024"
  //       />
  //       <Card
  //         title="Capstone 1 Evaluations Part 1"
  //         details="Posted Jun 12, 2024"
  //         date="Due Feb 17, 2024"
  //       />
  //       <Card
  //         title="Template Assignment"
  //         details="Posted Jun 12, 2024"
  //         date="Due Feb 17, 2024"
  //       />

  //       <Box className="mt-6">
  //         <Typography variant='h4' className="text-xl font-bold"> Final Capstone Project </Typography>
  //       </Box>
  //     </Box>
  //   );
  // };

  // export default ClassDetail;
