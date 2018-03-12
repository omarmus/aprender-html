'use strict';

import axios from 'axios';

const url = 'http://localhost:4000/';

export default {
  getPage (code = '') {
    return new Promise((resolve, reject) => {
      axios.post(`${url}api/page`, {
        code: code.toLowerCase()
      }).then(response => {
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
        axios.put(`${url}api-rest/pages/${data.id}`, update)
        .then(response => {
          resolve(response.data);
        });
      } else {
        axios.post(`${url}api-rest/pages`, data)
        .then(response => {
          resolve(response.data);
        });
      }
    });
  }
}
