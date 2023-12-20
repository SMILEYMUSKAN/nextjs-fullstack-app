// Note: Prisma is older version it doesn't includes ES6 version of javascript.
// If we want to import (or) export our modules/functions, we have to define require and module.exports functionality.

const Prisma = require("@prisma/client");
const { PrismaClient } = Prisma;
const courseLessonsData = require("./data/lessons");
const courseData = require("./data/courses");

const prisma = new PrismaClient();

courseData.forEach((course: any, idx: number) => {
  (async () => {
    const courseData = await prisma.course.upsert({
      where: {
        id: course.id,
      },
      create: {
        id: course?.id,
        name: course?.name,
        description: course?.description,
        coursePhotoUrl: course?.coursePhotoUrl,
        duration: course?.duration,
        enrollmentStatus: course?.enrollmentStatus,
        instructor: course?.instructor,
      },
      update: {},
    });
  })();
});

courseLessonsData.forEach((lesson: string, idx: number) => {
  (async () => {
    const lessons = await prisma.lessons.upsert({
      where: {
        id: idx + 1,
      },
      create: {
        id: idx + 1,
        name: lesson,
        courseId: 2,
      },
      update: {},
    });
  })();
});
