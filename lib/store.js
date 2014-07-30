var config = require('../config')
  , client = require('redis').createClient(config.storage.port, config.storage.host)
  , session = require('express-session')
  , RedisStore = require('connect-redis')(session)
  , sessionClient = new RedisStore({port: config.storage.port, host: config.storage.host});

var store = {
  client: client,
  session: sessionClient,

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
