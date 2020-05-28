const redis = require('redis');
const client = redis.createClient({
  host: '127.0.0.1',
  port: '6379'
});

// const client = redis.createClient({
//   host: 'redis',
//   port: '6379'
// });

// const client = process.env.IS_DOCKER ? redis.createClient({
//   host: 'redis',
//   port: '6379'
// }) : redis.createClient({
//   host: '127.0.0.1',
//   port: '6379'
// });

const { promisify } = require("util");
const setAsync = promisify(client.set).bind(client);

module.exports = {
  insert: async (date) => {
    return setAsync(JSON.stringify(date), 'inserted!');
  }
};