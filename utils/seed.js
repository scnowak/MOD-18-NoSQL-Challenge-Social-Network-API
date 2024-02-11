const connection = require('../config/connection');
const { Thought, User } = require('../models');

const { users, thoughts } = require('./data');


console.time('seeding');


connection.once('open', async () => {

  await Thought.deleteMany({});
  await User.deleteMany({});

  await User.collection.insertMany(users);


  await Thought.collection.insertMany(thoughts);


  console.table(users);
  console.table(thoughts, ['published', 'users', '_id']);
  console.timeEnd('seeding');
  process.exit(0);
});