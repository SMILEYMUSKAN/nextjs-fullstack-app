import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const prisma = new PrismaClient();
  const { searchParams } = new URL(request.url);
  const searchText = searchParams.get("query");
  const data = await prisma.course.findMany({
    where: {
      OR: [
        {
          name: {
            contains: searchText || "",
          },
        },
      ],
    },
  });
  return NextResponse.json({
    dbData: data,
  });
}
