'use strict';

module.exports = async () => {
  // Recupera o serviço de permissões
  const actions = [
    {
      section: 'plugins',
      displayName: 'Access the API',
      uid: 'api',
      pluginName: 'api',
    },
  ];

  await strapi.admin.services.permission.actionProvider.registerMany(actions);

  const roles = await strapi.query('plugin::users-permissions.role').findMany();
  const publicRole = roles.find(role => role.type === 'public');

  if (publicRole) {
    // Define as permissões que queremos ativar
    const permissions = {
      'api::job-position.job-position': ['find', 'findOne'],
      'api::blog-post.blog-post': ['find', 'findOne'],
      'api::category.category': ['find', 'findOne'],
      'api::success-case.success-case': ['find', 'findOne'],
    };

    // Ativa as permissões para cada content-type
    for (const [contentType, actions] of Object.entries(permissions)) {
      for (const action of actions) {
        await strapi.query('plugin::users-permissions.permission').create({
          data: {
            action: `${contentType}.${action}`,
            role: publicRole.id,
            enabled: true,
          },
        });
      }
    }
  }
}; 