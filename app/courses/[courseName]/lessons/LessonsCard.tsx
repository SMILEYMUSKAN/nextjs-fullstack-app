import { Lesson } from "@/types";
import Link from "next/link";

interface LessonCardProps {
  lessons: Lesson;
}

export default function LessonsCardComponent({ lessons }: LessonCardProps) {
  const { id, name } = lessons || {};

  return (
    <div className="w-1/2 mt-6 flex flex-col mx-auto gap-4 shadow-xl ml-6 p-4 mb-4 rounded">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <h1 className="text-gray-500 text-xl">Lesson: {id}</h1>
        </div>
      </div>
      <h1 className="text-2xl font-bold">{name}</h1>
      <section className="flex gap-6 items-center">
        <button className="p-2 border shadow rounded hover:bg-gray-100 hover:transition">
          Submissions: None
        </button>
        <div className="flex gap-2 items-center">
          <button className="p-2 border shadow rounded hover:bg-gray-100 hover:transition">
            Get Started
          </button>
          <Link href={"/"}>
            <button className="p-2 border shadow rounded hover:bg-gray-100 hover:transition">
              Go Back To Courses
            </button>
          </Link>
          <span className="text-green-500">Status : Lesson Status</span>
        </div>
      </section>
    </div>
  );
}
