

export class CourseServiceClient {
  // COURSE_URL = 'http://localhost:8080/api/course'
  COURSE_API_URL = 'https://webdev-summer1-2018-delsener.herokuapp.com/api/course'

  findAllCourses() {
    return fetch( this.COURSE_API_URL ).then(response => response.json());
  }

  findCourseById(courseId) {
    return fetch(this.COURSE_API_URL + '/' + courseId).then(response => response.json());
  }

}
