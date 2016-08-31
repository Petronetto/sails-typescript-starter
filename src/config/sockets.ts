/**
 * WebSocket Server Settings
 * (sails.config.sockets)
 *
 * These settings provide transparent access to the options for Sails'
 * encapsulated WebSocket server, as well as some additional Sails-specific
 * configuration layered on top.
 *
 * For more information on sockets configuration, including advanced config options, see:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.sockets.html
 */

module.exports.sockets = {

    // adapter: 'memory',

    //
    // -OR-
    //

    // adapter: 'socket.io-redis',
    // host: '127.0.0.1',
    // port: 6379,
    // db: 0,
    // pass: '<redis auth password>',

    // grant3rdPartyCookie: true,

    // beforeConnect: function(handshake, cb) {
    //   // `true` allows the connection
    //   return cb(null, true);
    //
    //   // (`false` would reject the connection)
    // },

    // afterDisconnect: function(session, socket, cb) {
    //   // By default: do nothing.
    //   return cb();
    // },

    // transports: ["polling", "websocket"]

};
