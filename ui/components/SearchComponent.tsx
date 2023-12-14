"use client";
import React, { useState, useEffect } from "react";
import { SearchCourseModal } from "./SearchCourseModal";

function SearchComponent() {
  const [searchText, setSearchText] = useState("");
  //const [debouncedInputValue, setDebouncedInputValue] = useState("");
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(true);

  // There are three solutions to handle debounce functionality .

  // Solution-1
  /*
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInputValue(searchText);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchText]);

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
*/

  // Solution-2

  useEffect(() => {
    setLoading(true);
    const clearTimeOutId = setTimeout(() => {
      getData();
    }, 500);

    return () => clearInterval(clearTimeOutId);
  }, [searchText]);

  const getData = () => {
    if (searchText) {
      setLoading(true);
      fetch(`/api/courses?query=${searchText}`)
        .then((res) => res.json())
        .then((courseInfo: any) => {
          const { dbData } = courseInfo || {};
          setCourseData(dbData);
          setLoading(false);
        })
        .catch(console.log);
    }
  };
  // Solution-3 Example
  /*
   For this solution we will be using the debounce function from use-debounce,
   Firstly we will need to install lodash in our application by running the following command.

   `npm install use-debounce`
    --------------------------------------------------------------------------------------------------

    import React from "react";
    import { useDebounce } from "use-debounce";

   const DebounceInput = () => {
   const [inputValue, setInputValue] = React.useState("");

   const [debouncedValue] = useDebounce(inputValue, 500);
   
   Now we can use the debouncedValue wherever necessary.

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  return <input type="text" value={inputValue} onChange={handleInputChange} />;
};
  */

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
