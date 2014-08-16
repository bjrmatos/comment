Anonymous comment system using Socket.io, Node.js and React.js
--------------

This comment system supports threaded discussions, likes and a simplified login system that uses Twitter API.

It only stores a user id and the avatar's path in a **Redis data store** which allows a user to be anonymous. The user is in control of how anonymous he can.

### Requirements

You haven't installed **Node.js** yet, please refer to [the official documentation](http://nodejs.org/download/).

You haven't installed **Redis** yet, please refer to [the official documentation](http://redis.io/download).
Once Redis is installed, in the command line, run `redis-cli`.

### Installation

Once Node.js and Redis are installed, clone the repo:

```
git clone https://github.com/http-teapot/comment
```

Duplicate `config.dist.js`, name the new file `config.js` and fill out the settings as much as you can.

If you didn't set a new app on Twitter (so users can log in), head to the [Twitter's app website](https://apps.twitter.com/), create a new app and check the `API Keys` tab to get the different keys.

Most settings will work fine as-is just make sure you specify a domain (can be localhost or 127.0.0.1).

Once it's all complete, run:

```
npm start
```

If you decided to run your app on port 80, you will the command above as root.

```
sudo npm start
```

### Testing

Once you installed the app, run the following command:

```
npm test
```

### Under the MIT license

For more information, refer to the [LICENSE file](https://github.com/http-teapot/comment/blob/master/LICENSE) in this repository.
