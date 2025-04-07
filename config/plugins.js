module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
      jwt: {
        expiresIn: '7d',
      },
      ratelimit: {
        max: 100,
        windowMs: 60 * 1000,
      },
      permissions: {
        'api::job-position.job-position': {
          find: { enabled: true },
          findOne: { enabled: true },
        },
        'api::blog-post.blog-post': {
          find: { enabled: true },
          findOne: { enabled: true },
        },
        'api::category.category': {
          find: { enabled: true },
          findOne: { enabled: true },
        },
        'api::success-case.success-case': {
          find: { enabled: true },
          findOne: { enabled: true },
        },
      },
    },
  },
});
