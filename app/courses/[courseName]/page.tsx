import { PrismaClient } from "@prisma/client";
import EachCourse from "./Course";

interface CourseDetailsProps {
  params: {
    courseName: string;
  };
}

export default async function CourseDetails(props: CourseDetailsProps) {
  const {
    params: { courseName },
  } = props || {};
  const prisma = new PrismaClient();
  const data = await prisma.course.findMany({
    where: {
      name: courseName,
    },
  });
  return (
    <div>
      <EachCourse list={data} />
    </div>
  );
}
