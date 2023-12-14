"use client"
import React, { useState, useEffect } from "react";

 function SearchBar({ getText } : any) {
  const [searchText, setSearchText] = useState("");
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    const clearTimeOutId = setTimeout(() => {
        getText(searchText)
     }, 500)
   
   return () => clearInterval(clearTimeOutId)
  }, [searchText])

  console.log(searchText)


   return (
    <div>
      <input className="w-96 p-2 bg-gray-300 rounded" placeholder="search something...." value={searchText} onChange={(event) => setSearchText(event.target.value)}/>
      <pre className="mt-2">Search Word:({searchText})</pre>
    </div>
  );
}

export default React.memo(SearchBar);
