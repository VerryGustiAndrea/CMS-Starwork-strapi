const { sanitizeEntity } = require('strapi-utils');
module.exports = {
  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.services.starPedia.findOne({ id });
    entity.Content = entity.Content.replace(`src=\"`, `src=\\"${strapi.config.get('https://cms.starworksglobal.com')}"`);
    return sanitizeEntity(entity, { model: strapi.models.starPedia });
  },
};
