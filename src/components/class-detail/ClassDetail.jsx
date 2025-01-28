import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const ClassDetail = ({ title, details, date, noDueDate }) => {
  return (
    <Card className="w-full mb-4 shadow-md">
      <CardContent className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-blue-100 rounded-full">
            <i className="text-blue-500">📋</i>
          </div>
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-gray-600">{details}</p>
          </div>
        </div>
        <div className="text-right">
          {noDueDate ? (
            <p className="text-sm text-gray-500">No due date</p>
          ) : (
            <p className="text-sm text-gray-500">{date}</p>
          )}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" className="text-xl">⋮</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>View</DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardContent>
    </Card>
  );
};

const TaskList = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">View your work</h2>
        <select className="border p-2 rounded-md">
          <option>All topics</option>
          <option>Git and GitHub Practice</option>
          <option>Capstone Evaluations</option>
        </select>
      </div>

      <Card
        title="Git and GitHub Practice"
        details="Posted Jun 15, 2024"
        noDueDate={true}
      />
      <Card
        title="Capstone 1 Evaluations Part 2"
        details="Posted Jun 15, 2024"
        date="Due Feb 17, 2024"
      />
      <Card
        title="Capstone 1 Evaluations Part 1"
        details="Posted Jun 12, 2024"
        date="Due Feb 17, 2024"
      />
      <Card
        title="Template Assignment"
        details="Posted Jun 12, 2024"
        date="Due Feb 17, 2024"
      />

      <div className="mt-6">
        <h2 className="text-xl font-bold">Final Capstone Project</h2>
      </div>
    </div>
  );
};

export default ClassDetail;
