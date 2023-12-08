import { PrismaClient } from "@prisma/client";
import EachCourse from "./Course";

interface CourseDetailsProps {
  params: {
    courseName: string;
  };
}
const getCourseData = async (courseName : string) => {
  const prisma = new PrismaClient();
  const data = await prisma.course.findMany({
    where: {
      name: courseName,
    },
  });

  return data;
}
export default async function CourseDetails(props: CourseDetailsProps) {
  const {
    params: { courseName },
  } = props || {};
  const courseInfo = await getCourseData(courseName);
  console.log(courseInfo)
  return (
    <div>
      <EachCourse list={courseInfo} />
    </div>
  );
}
