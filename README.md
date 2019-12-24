# serverless-offline-redis-server

Run a local Redis server using Serverless Offline.

This plugin is intended for local development only, and is therefore only invoked on
`serverless offline start`.

## Installation

1. Install the [Redis server](https://redis.io/topics/quickstart) locally.
2. Add this plugin as a dev dependency:

    ```bash
    # NPM
    npm install --save-dev serverless-offline-redis-server
    # Yarn
    yarn add -D serverless-offline-redis-server
    ```
3. Add the plugin to your `serverless.yml` file:

    ```yaml
    plugins:
        - serverless-offline-redis-server
    ```

## Configuration

You can pass any configuration accepted by [redis-server](https://www.npmjs.com/package/redis-server) via the `custom.redis` property in your `serverless.yml`.

```yaml
service: myservice
custom:
  redis:
    port: 8888
```
