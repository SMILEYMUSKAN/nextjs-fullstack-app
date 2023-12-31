export interface Course {
  id: number;
  name: string;
  coursePhotoUrl: string;
  instructor: string;
  description: string;
  enrollmentStatus: string;
  duration: string;
  schedule: string;
  location: string;
}

export interface Lesson {
  id: number;
  name: string;
  courseId: number;
}
