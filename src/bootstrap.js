'use strict';

module.exports = async ({ strapi }) => {
  try {
    // Encontra o role público
    const publicRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'public' } });

    if (!publicRole) {
      return;
    }

    // Lista de permissões para habilitar
    const permissions = [
      'api::blog-post.blog-post.find',
      'api::blog-post.blog-post.findOne',
      'api::category.category.find',
      'api::category.category.findOne',
      'api::job-position.job-position.find',
      'api::job-position.job-position.findOne',
      'api::success-case.success-case.find',
      'api::success-case.success-case.findOne'
    ];

    // Habilita cada permissão
    await Promise.all(
      permissions.map(permission =>
        strapi.query('plugin::users-permissions.permission').create({
          data: {
            action: permission,
            role: publicRole.id,
            enabled: true
          }
        })
      )
    );
  } catch (error) {
    console.error('Erro ao configurar permissões:', error);
  }
};
