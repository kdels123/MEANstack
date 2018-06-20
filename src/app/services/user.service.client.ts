export class UserServiceClient {

  createUser(username, password) {
    const user = {
      username: username,
      password: password,
      firstName: '',
      lastName: '',
      email: ''
    };
    return fetch('https://cs5610-nodejs-kdelsener.herokuapp.com/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  profile() {
    return fetch('https://cs5610-nodejs-kdelsener.herokuapp.com/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('https://cs5610-nodejs-kdelsener.herokuapp.com/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  logout() {
    return fetch('https://cs5610-nodejs-kdelsener.herokuapp.com/api/logout', {
      credentials: 'include', // include, same-origin, *omit
      method: 'post'
    });
  }

  findUserById(userId) {
    return fetch('https://cs5610-nodejs-kdelsener.herokuapp.com/api/user' + userId)
      .then(response => response.json());
  }

  updateUser(username, firstName, lastName, email) {
    const user = {
      username: username,
      firstName: firstName,
      lastName: lastName,
      email: email
    };
    return fetch('https://cs5610-nodejs-kdelsener.herokuapp.com/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    });
  }




}
