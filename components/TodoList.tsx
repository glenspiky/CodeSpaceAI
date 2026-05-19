"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import { Card } from "./ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { useState } from "react";
import { CalendarIcon } from "lucide-react";

export default function TodoList() {
  // 1. Define your data list
  const todoItems = [
    { id: "1", task: "Review the project documentation for updates." },
    { id: "2", task: "Complete the integration of the Next.js image config." },
    { id: "3", task: "Coordinate with the design team for the new UI." },
    { id: "4", task: "Test the application responsiveness on mobile devices." },
    { id: "5", task: "Refactor the authentication logic in the middleware." },
    { id: "6", task: "Prepare the weekly progress report for the client." },
    { id: "7", task: "Debug the layout shift issues on the dashboard." },
    { id: "8", task: "Optimize the database queries for faster loading." },
    { id: "9", task: "Schedule a meeting with the backend developers." },
    { id: "10", task: "Update the dependencies to the latest stable version." },
    { id: "11", task: "Write unit tests for the utility functions." },
    { id: "12", task: "Implement the dark mode theme using Tailwind CSS." },
    { id: "13", task: "Review pull requests from the engineering team." },
    { id: "14", task: "Set up the environment variables for production." },
    { id: "15", task: "Finalize the deployment pipeline configuration." },
  ];
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <h1 className="text-lg font-medium mb-4">Todo List</h1>
      <h2 className="text-lg font-semibold mb-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full  p-6">
              <CalendarIcon />
              {date ? format(date, "ppp") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 w-auto ">
            {" "}
            <Calendar
              mode="single"
              selected={date}
              onSelect={(date) => {
                setDate(date);
                setOpen(false);
              }}
              className="rounded-lg border"
            />
          </PopoverContent>
        </Popover>
      </h2>
      <ScrollArea className="h-[400px] w-full rounded-md border p-4">
        <div className="space-y-3">
          {/* 2. Use .map() to iterate over the list */}
          {todoItems.map((item) => (
            <Card
              key={item.id}
              className="p-4 flex items-center gap-4 flex flex-row"
            >
              <Checkbox id={item.id} />
              <label
                htmlFor={item.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {item.task}
              </label>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
