"use client";
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Link from "next/link";

export function SearchCourseModal(props: any) {
  const { setCourseData, setSearchText, searchText, courseData, loading } =
    props || {};
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleClose = () => {
    setOpen(false);
    setCourseData([]);
    setSearchText("");
  };

  return (
    <>
      <button onClick={handleOpen} className="flex items-center justify-start gap-24 w-96 bg-gray-900 hover:bg-gray-800 p-2 text-white rounded-md">
      <span className="text-3xl ml-6">⌕</span>
       <p>Quick Search!</p>
      </button>
      <Dialog
        open={open}
        handler={handleOpen}
        size="lg"
        className="flex flex-col"
      >
        <DialogHeader>
          <input
            placeholder="Course Name"
            className="w-full border-2 p-2 rounded-full pl-8 bg-gray-300"
            value={searchText}
            onChange={(event: any) => setSearchText(event.target.value)}
          />
        </DialogHeader>
        <hr />
        <DialogBody>
          {searchText ? (
            <>
              {loading ? (
                <p className="text-center text-lg">Loading...</p>
              ) : (
                <div>
                  {courseData?.map((course : any, idx :any) => (
                    <div key={idx} className="border-b-2 mb-2 p-2">
                      <Link
                        href={`/courses/${course?.name}`}
                        className="text-xl"
                      >
                        {course?.name}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <p className="text-center text-lg">Search Courses</p>
          )}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleClose}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
