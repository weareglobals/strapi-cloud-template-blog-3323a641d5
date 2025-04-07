'use strict';

/**
 * about router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::blog-posts.blog-posts');
