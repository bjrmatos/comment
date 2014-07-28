var config = require('../config')
  , client = require('redis').createClient(config.storage.port, config.storage.host);

var store = {
  client: client,

  set: function (type, key, value) {
    return this.client.hset(type, key, JSON.stringify(value));
  },

  get: function (type, key, callback) {
    return this.client.hget(type, key, function (err, data) {
      return callback(err, JSON.parse(data));
    });
  }
};

module.exports = store;
