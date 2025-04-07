module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      rest: {
        defaultLimit: 100,
        maxLimit: 250,
      },
      jwtSecret: env('JWT_SECRET'),
    },
  },
});
