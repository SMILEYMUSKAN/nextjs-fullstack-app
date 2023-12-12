import { PrismaClient } from "@prisma/client";
import CourseList from "@/ui/components/course/CourseList";
import SearchComponent  from "@/ui/components/course/SearchComponent";

 async function getData() {
  const prisma = new PrismaClient();
  const data = await prisma.course.findMany({});

  return {
    courseContent: data,
  };
}

export default async function CourseView() {
  const { courseContent } = await getData();
  return (
    <div>
      <SearchComponent />
      <CourseList list={courseContent} />
    </div>
  );
}
