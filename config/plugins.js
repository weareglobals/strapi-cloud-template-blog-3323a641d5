module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      rest: {
        defaultLimit: 100,
        maxLimit: 250,
      }
    }
  }
});
