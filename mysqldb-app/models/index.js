'use strict'
const User = require('./user')

async function init() {
    await User.sync();
    // await Post.sync() 'prep for lab 3'
}

init();

module.exports = {
    User,
    //Post
}