import { CourseCard } from "./CourseCard";
import  { Course } from "@/types";

export interface CourseListProps {
  list : Course[];
}

export default function CourseList( { list = []} : CourseListProps){
   
    return <div className="flex mt-12 flex-wrap justify-center items-center">
       {list.map((course : Course) => <CourseCard key={course.id} course={course}/>)}
    </div>
}