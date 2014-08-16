/**
 * Config sample file
 */
module.exports = {
  'port': 80,
  'oauth': {
    'twitter': {
      'consumerKey': '',
      'consumerSecret': '',
      'callbackURL': '',
    }
  },
  'session': {
    'name': 'connect.sid',
    'cookie': {
      'domain': 'domain.tld'
      'path': '/',
      'httpOnly': true,
      'secure': false,
      'maxAge': null
    },
    'secret': 'A not-so-secret key'
  },
  'socket': {
    'domain': 'domain.tld',
    'port': 80
  },
  'storage': {
    'type': 'redis',
    'host': '127.0.0.1',
    'port': 6379
  }
}
