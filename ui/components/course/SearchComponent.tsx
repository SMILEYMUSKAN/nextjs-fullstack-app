"use client"
import React, { useState, useEffect } from "react";
import { SearchCourseModal } from "./SearchCourseModal";

function SearchComponent() {
  const [searchText, setSearchText] = useState("");
  const [debouncedInputValue, setDebouncedInputValue] = useState("");
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInputValue(searchText);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchText, 500]);

  useEffect(() => {
    setLoading(false);
    if (searchText) {
      setLoading(true);
      fetch(`/api/courses?query=${searchText}`)
        .then((res) => res.json())
        .then((coursesData) => {
          const { dbData } = coursesData;
          setCourseData(dbData);
          setLoading(false);
        })
        .catch(console.log);
    }
  }, [debouncedInputValue]);

  return (
    <div className="flex gap-4 justify-center items-center mt-4">
      <SearchCourseModal
        setCourseData={setCourseData}
        loading={loading}
        searchText={searchText}
        setSearchText={setSearchText}
        courseData={courseData}
      />
    </div>
  );
}

export default React.memo(SearchComponent);
