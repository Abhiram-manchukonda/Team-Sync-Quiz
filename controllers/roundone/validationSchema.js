const Joi = require("joi");
const { objectIdLength } = require("../../utils/constants");

module.exports = {
  roundOneValidationMapSchema: (body) => {
    const Schema = Joi.object({
      mapChoice: Joi.number().required(),
    });
    return Schema.validate(body);
  },
};
