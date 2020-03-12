const axios = require('axios');

const service = {
  async fetchData() {
    const { data } = await axios.get('http://backend-challenge-pos.pepperhq.com/menu.json');
    return data;
  }
};

module.exports = service;
