export class WidgetServiceClient {
  findWidgetsForLesson(lessonId) {
    return fetch('https://webdev-summer1-2018-delsener.herokuapp.com/api/lesson/' + lessonId + '/widget')
      .then(response => response.json());
  }
}
