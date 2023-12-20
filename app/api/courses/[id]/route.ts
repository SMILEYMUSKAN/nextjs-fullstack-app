import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function GET(request: NextRequest) {
  const url = request.url.split("/");
  const courseId = url[url.length - 1];
  // if we want specific fields in table of database we use findFirst property
  const courseLessons = await prisma.course.findFirst({
    where: {
      id: +courseId,
    },
    select: {
      id: true,
      name: true,
      lessons: true,
    },
  });

  return NextResponse.json({
    courseLessons,
  });
}
