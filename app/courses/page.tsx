import { PrismaClient } from "@prisma/client";
import CourseList from "@/ui/course/CourseList";

export async function getData(){
  const prisma = new PrismaClient();
  const data = await prisma.course.findMany({});

  return {
    courseContent : data
  }
}

export default async function CourseView(){
  const { courseContent } = await getData();
  
  return (
    <div>
      <CourseList list={courseContent}/>
    </div>
  );
}

