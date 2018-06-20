export class LessonServiceClient {
  findLessonsForModule(courseId, moduleId) {
    return fetch('https://webdev-summer1-2018-delsener.herokuapp.com/api/course/' + courseId + '/module/' + moduleId + '/lesson')
      .then(response => response.json());

  }
}
