

export class CourseServiceClient {
  COURSE_URL = 'http://localhost:8080/api/course'

  findAllCourses() {
    return fetch( this.COURSE_URL ).then(response => response.json());
  }

  findCourseById(courseId) {
    return fetch(this.COURSE_URL + '/' + courseId).then(response => response.json());
  }

  findCoursesForStudents() {
    const url = 'http://localhost:4000/api/student/course';
    return fetch(url, {
      credentials: 'include'
    }).then(response => response.json());
  }

}
