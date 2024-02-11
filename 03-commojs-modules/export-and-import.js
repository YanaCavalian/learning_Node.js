const { myName } = require('./multiple-export');

const myFriendName = 'Alice';

module.exports.myName = myName;
module.exports.myFriendName = myFriendName;
