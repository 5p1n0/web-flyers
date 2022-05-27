module.exports = {
	flyers: async (req, res) => 
		{
			const utils = require('../utils');

			const pageIndex = utils.pageValidation(+req.query.page) - 1;
			const limitIndex = utils.limitValidation(+req.query.limit);

			const data = await utils.parseData(pageIndex * limitIndex, limitIndex - 1);
			
			res.send(data);
		},
};
