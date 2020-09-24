'use strict';

const RedisServer = require('redis-server');

class ServerlessOfflineRedisServer {

  constructor(serverless) {

    const config = (serverless.service.custom || {}).redis || {};
    this.serverless = serverless;
    this.server = new RedisServer(config);

    this.hooks = {
      // backward compatible initialisation
      'before:offline:start:init': this.openServer.bind(this),
      'before:offline:start:end': this.closeServer.bind(this),
      // modern day initialisation
      'before:offline:start': this.openServer.bind(this),
      'before:offline:end': this.closeServer.bind(this),
    };

  }

  openServer() {
    return this.server.open().then(() => {
      this.serverless.cli.log(`Redis server opened on port ${this.server.config.port}`);
    });
  }

  closeServer() {
    return this.server.close().then(() => {
      this.serverless.cli.log('Redis server closed');
    });
  }

}

module.exports = ServerlessOfflineRedisServer;
