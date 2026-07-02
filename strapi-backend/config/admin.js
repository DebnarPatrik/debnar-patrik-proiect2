module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'myAdminJwtSecret123456'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'myApiTokenSalt123456'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'myTransferTokenSalt123'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
