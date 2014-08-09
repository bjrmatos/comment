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
    var func;
    if (typeof key === "object") {
      func = function (err, data) {
        var r = [];

        for (var i = 0; i < data.length; i++) {
          r.push(JSON.parse(data[i]));
        }

        return callback(err, r);
      };

      return this.client.hmget(type, key, func);
    } else {
      func = function (err, data) {
        return callback(err, JSON.parse(data));
      };

      return this.client.hget(type, key, func);
    }
  },

  incr: function (type, key, incr, callback) {
    return this.client.hincrby(type, key, incr, callback);
  },

  list: {
    prepend: function (key, value, callback) {
      return store.client.lpush(key, JSON.stringify(value), callback);
    },
    append: function (key, value, callback) {
      return store.client.rpush(key, JSON.stringify(value), callback);
    },
    range: function (key, start, stop, callback) {
      return store.client.lrange(key, start, stop, callback);
    }
  }
};

module.exports = store;
