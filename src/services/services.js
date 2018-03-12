'use strict';

import axios from 'axios';

const url = 'http://localhost:4000/api-rest/';

export default {
  getPage (code = '') {
    return new Promise((resolve, reject) => {
      axios.get(`${url}pages?code=${code.toLowerCase()}`)
      .then(response => {
        resolve(response.data);
      });
    })
  },
  savePage (data) {
    return new Promise((resolve, reject) => {
      if (data.id) {
        const update = {
          settings: data.settings,
          tags: data.tags
        };
        axios.put(`${url}pages/${data.id}`, update)
        .then(response => {
          resolve(response.data);
        });
      } else {
        axios.post(`${url}pages`, data)
        .then(response => {
          resolve(response.data);
        });
      }
    });
  }
}
