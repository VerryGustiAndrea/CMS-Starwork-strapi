module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 8122),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'starworks'),
        password: env('DATABASE_PASSWORD', 'generasioptimis'),
	charset: 'utf8mb4'
      },
      options: {},
    },
  },
});
