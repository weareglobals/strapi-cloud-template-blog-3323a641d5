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
      // Blog Posts
      'api::blog-post.blog-post.find',
      'api::blog-post.blog-post.findOne',
      'api::blog-post.blog-post.create',
      'api::blog-post.blog-post.update',
      'api::blog-post.blog-post.delete',
      // Categories
      'api::category.category.find',
      'api::category.category.findOne',
      'api::category.category.create',
      'api::category.category.update',
      'api::category.category.delete',
      // Job Positions
      'api::job-position.job-position.find',
      'api::job-position.job-position.findOne',
      'api::job-position.job-position.create',
      'api::job-position.job-position.update',
      'api::job-position.job-position.delete',
      // Success Cases
      'api::success-case.success-case.find',
      'api::success-case.success-case.findOne',
      'api::success-case.success-case.create',
      'api::success-case.success-case.update',
      'api::success-case.success-case.delete',
      // Global (SingleType)
      'api::global.global.find',
      'api::global.global.findOne',
      'api::global.global.create',
      'api::global.global.update',
      'api::global.global.delete'
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

    console.log('Permissões configuradas com sucesso!');
  } catch (error) {
    console.error('Erro ao configurar permissões:', error);
  }
};
