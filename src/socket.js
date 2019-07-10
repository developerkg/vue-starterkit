
// eslint-disable-next-line import/no-mutable-exports
let socketClient = {};

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  socketClient = require('socket.io-client');
} else {
  // eslint-disable-next-line no-undef
  socketClient = io();
}

export default null;
export { socketClient };
