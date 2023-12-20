"use client";
import React, { useState, useEffect } from "react";
import { CourseCard } from "../course/CourseCard";
import Loading from "./LoadingSpinner";

function SearchBar({ getText }: any) {
  const [searchText, setSearchText] = useState("");
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const clearTimeOutId = setTimeout(() => {
      getText(searchText).then((res: any) => {
        setCourseData(res);
        setLoading(false);
      });
    }, 500);

    return () => clearInterval(clearTimeOutId);
  }, [searchText]);

  return (
    <div className="flex w-full justify-center mt-6 items-center flex-col gap-4 relative">
      <input
        className="w-1/2 rounded-full pl-12 p-2 bg-gray-300 rounded"
        placeholder="Search Courses Here...."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex mt-6 flex-wrap justify-center items-center gap-4">
            {courseData.length > 0 ? (
              <>
                {courseData
                  ?.slice()
                  .sort((a: any, b: any) => (a?.name > b?.name ? 1 : -1))
                  .map((course: any) => (
                    <CourseCard key={course?.id} course={course} />
                  ))}
              </>
            ) : (
              <div className="flex justify-center gap-2 items-center flex-col">
                <section className="flex justify-center gap-2 items-center">
                  <strong className="text-2xl">{searchText}</strong>
                  <p className="text-2xl">Not Found, Search Again</p>
                </section>
                <img
                  src="https://cdn.dribbble.com/users/2382015/screenshots/6065978/no_result.gif"
                  alt="gif"
                  className="w-full"
                />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default React.memo(SearchBar);
