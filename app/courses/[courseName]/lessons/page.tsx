import { PrismaClient } from "@prisma/client";
import LessonsCardComponent from "./LessonsCard";
import Link from "next/link";

interface LessonPageProps {
  params: {
    courseName: string;
  };
}

const getData = async (courseName: string) => {
  const prisma = new PrismaClient();
  const lessons = await prisma.lessons.findMany({
    where: {
      courseId: +courseName,
    },
  });

  return lessons;
};

export default async function LessonsPage({
  params: { courseName },
}: LessonPageProps) {
  const lessonsData = await getData(courseName);

  return (
    <div>
      {lessonsData.length > 0 ? (
        <div className="mx-auto">
          {lessonsData?.map((lesson, idx) => (
            <LessonsCardComponent key={idx} lessons={lesson} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col gap-8 mt-40">
          <p className="text-3xl">Lessons Currently Not Available!</p>
          <Link href={`/courses/${courseName}`}>
            <button className="w-40 bg-black rounded p-2 text-white hover:bg-gray-900">
              Back
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
