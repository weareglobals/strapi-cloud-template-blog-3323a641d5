'use strict';

module.exports = ({ env }) => ({
  'api-token': {
    access: [
      {
        action: 'api::blog-post.blog-post.find',
        scope: ['read']
      },
      {
        action: 'api::blog-post.blog-post.findOne',
        scope: ['read']
      },
      {
        action: 'api::category.category.find',
        scope: ['read']
      },
      {
        action: 'api::category.category.findOne',
        scope: ['read']
      },
      {
        action: 'api::job-position.job-position.find',
        scope: ['read']
      },
      {
        action: 'api::job-position.job-position.findOne',
        scope: ['read']
      },
      {
        action: 'api::success-case.success-case.find',
        scope: ['read']
      },
      {
        action: 'api::success-case.success-case.findOne',
        scope: ['read']
      }
    ]
  }
}); 