/**
 * blog service
 */

const { factories } = require('@strapi/strapi');

module.exports = factories.createCoreService('api::blog.blog');
