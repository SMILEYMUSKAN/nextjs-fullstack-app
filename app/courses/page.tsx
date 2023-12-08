import { PrismaClient } from "@prisma/client";
import CourseList from "@/ui/course/CourseList";

export async function getData() {
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
      <div className="flex justify-center items-center mt-4 gap-4">
        <input
          placeholder="Course Name"
          className="w-1/2 p-2 border-2 rounded pl-8"
        />
        <button
          type="submit"
          className="bg-gray-800 w-24 p-2 rounded text-white hover:bg-gray-700"
        >
          Search
        </button>
      </div>

      <CourseList list={courseContent} />
    </div>
  );
}
