import { PrismaClient } from "@prisma/client";

export async function getData() {
  const db = new PrismaClient();
  const data = await db.course.findMany({});
  const jsCourse = await db.course.findMany({
    where: {
      name: "Javascript",
    },
  });
  return {
    courseList: data,
    selectedCourse: jsCourse,
  };
}

export default async function CourseList() {
  const courseData = await getData();
  return (
    <div>
      <h1>Welcome To Course List Page</h1>
      <pre>{JSON.stringify(courseData, null, 2)}</pre>
    </div>
  );
}
