const prisma  = require("@prisma/client");

// Note: Prisma is older version it doesn't includes ES6 version of javascript.
// If we want to import (or) export our modules/functions, we have to define require and module.exports functionality.

const { PrismaClient } = prisma || {};

const prismaClientDb = new PrismaClient();

(async () => {
    const newCourse = await prismaClientDb.course.create({
        data : {
            name : "Python",
            description : "Python",
            coursePhotoUrl : "https://ciracollege.com/wp-content/uploads/2020/11/How-to-Learn-Python.jpg"
        }
    })
})()
