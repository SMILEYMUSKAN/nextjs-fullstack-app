import { Course } from "@/types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@/ui/index";

interface CourseCardProp {
  course: Course;
}

export function CourseDetailsCard({ course }: CourseCardProp) {
  const {
    name,
    coursePhotoUrl,
    description,
    instructor,
    duration,
    location,
    enrollmentStatus,
  } = course;
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-44">
        <img
          src={`${coursePhotoUrl}`}
          alt="card-image"
          style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography color="blue-gray" className="mb-2">
          Instructor Name: {instructor}
        </Typography>

        <Typography color="blue-gray" className="mb-2">
          Description: {description}
        </Typography>
        <Typography color="blue-gray" className="mb-2">
          Course Duration: {duration}
        </Typography>
        <Typography color="blue-gray" className="mb-2">
          Location: {location}
        </Typography>
        <Typography color="blue-gray" className="mb-2">
          Enrollment Status: {enrollmentStatus}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 flex justify-center items-center">
        <Button>Start Learning</Button>
      </CardFooter>
    </Card>
  );
}
