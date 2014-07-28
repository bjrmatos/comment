var User = function (attributes) {
  for (attr in attributes) {
    this[attr] = attributes[attr];
  }
};

module.exports = User;
