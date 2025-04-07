'use strict';

module.exports = (plugin) => {
  // Get current `beforeCreate` function
  const beforeCreate = plugin.contentTypes['plugin::users-permissions.user'].lifecycles.beforeCreate;

  plugin.contentTypes['plugin::users-permissions.user'].lifecycles.beforeCreate = async (event) => {
    if (beforeCreate) {
      await beforeCreate(event);
    }
  };

  plugin.contentTypes['plugin::users-permissions.permission'].actions = {
    ...plugin.contentTypes['plugin::users-permissions.permission'].actions,
    'content-api': {
      controllers: {
        'job-position': {
          find: { enabled: true },
          findOne: { enabled: true },
        },
        'blog-post': {
          find: { enabled: true },
          findOne: { enabled: true },
        },
        'category': {
          find: { enabled: true },
          findOne: { enabled: true },
        },
        'success-case': {
          find: { enabled: true },
          findOne: { enabled: true },
        },
      },
    },
  };

  return plugin;
}; 