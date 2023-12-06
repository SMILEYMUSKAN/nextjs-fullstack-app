import { CourseCard } from "./CourseCard";
import  { Course } from "@/types";

interface CourseListProps {
  list : Course[];
}

export default function CourseList( { list = []} : CourseListProps){
   
    return <div className="flex mt-12">
       {list.map((course : Course) => <CourseCard key={course.id} course={course}/>)}
    </div>
}