import { Course } from "@/types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@/ui/index";
import Link from "next/link";

interface CourseCardProp {
  course: Course;
}

export function CourseCard({ course }: CourseCardProp) {
  const { name, coursePhotoUrl } = course;
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
      </CardBody>
      <CardFooter className="pt-0">
        <Link href={`/courses/${name}`}>
          <Button>About the course</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
