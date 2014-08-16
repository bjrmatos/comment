Anonymous comment system using Socket.io, Node.js and React.js
--------------

This comment system supports threaded discussions, likes and a simplified login system that uses Twitter API.

It only stores a user id and the avatar's path in a **Redis data store** which allows a user to be anonymous (provided that the user does not share any personal information on his Twitter account).

By default, the app does not record your IP address.

![Preview of system](https://cloud.githubusercontent.com/assets/1534519/3942864/f9df9f9c-257a-11e4-9229-e995e10e77f8.png)

### Requirements

If you haven't installed **Node.js** yet, please refer to [the official documentation](http://nodejs.org/download/).

If you haven't installed **Redis** yet, please refer to [the official documentation](http://redis.io/download).
Once Redis is installed, execute the command `redis-cli` in the command line.

### Installation

Once Node.js and Redis are installed, clone the repo:

```
git clone https://github.com/http-teapot/comment
```

Duplicate `config.dist.js`, name the new file `config.js` and fill out the settings as much as you can.

Most settings will work fine as-is just make sure you specify a domain (can be localhost or 127.0.0.1).

If you didn't set a new app on Twitter (so users can log in), head to the [Twitter's app website](https://apps.twitter.com/), create a new app and check the `API Keys` tab to get the different keys.

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

### Contributing

Please feel free to contribute to this repository. This software was originally produced as a proof of concept and can definitely be improved.

### Under the MIT license

For more information, refer to the [LICENSE file](https://github.com/http-teapot/comment/blob/master/LICENSE) in this repository.
