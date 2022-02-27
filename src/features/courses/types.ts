export interface CourseInterface {
  year: number;
  section: string;
  shift: string;
  school: string;
  subject: string;
  schedule: Array<ScheduleInterface>;
  teacherId: string;
}
export interface ScheduleInterface {
  day: string;
  time: string;
}
