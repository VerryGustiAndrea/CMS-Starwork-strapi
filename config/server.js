module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '4e48b4dda6e52afba39611e3bfcb9fa9'),
    },
  },
  url: env('WEBSITE', '127.0.0.1'), // THIS ONE
});
