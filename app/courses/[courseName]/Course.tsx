import { CourseListProps } from "@/ui/components/course/CourseList";
import { Course } from "@prisma/client";
import { CourseDetailsCard } from "./CourseDetailsCard";

export default function EachCourse({ list = [] }: CourseListProps) {
  return (
    <div className="flex mt-12 flex-wrap justify-center items-center">
      {list.map((course: Course) => (
        <CourseDetailsCard key={course.id} course={course} />
      ))}
    </div>
  );
}
