module.exports = {
    apps: {
        api: {
            db: {
                host: 'DB_HOST',
                user: 'DB_USER',
                password: 'DB_PASSWORD',
                database: 'DB_NAME',
            },
            logs: {
                app: { Console: { timestamp: true, level: 'info' } },
                http: { Console: { timestamp: true } },
            },
            security: {
                rateLimitOptions: {
                    auth: {
                        adapter: 'redis',
                        duration: 60000,
                        max: 5,
                        redis: {
                            // see https://github.com/NodeRedis/node_redis#rediscreateclient for available options
                        },
                    },
                    api: {
                        adapter: 'redis',
                        duration: 3600000,
                        max: 2500,
                        redis: {
                            // see https://github.com/NodeRedis/node_redis#rediscreateclient for available options
                        },
                    },
                },
            },
        },
    },
};
