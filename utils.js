module.exports = {

  pageValidation: (page) => 
  {

    if (Number.isInteger(page) && page > 1) return page
    else return 1
  },

  limitValidation: (limit) => 
  {
    
    if (Number.isInteger(limit) && limit > 0 && limit < 100) return limit
    else return 100
  },
  
  parseData: async (startIndex, limitIndex) => 
  {
  
    const csv = require('csv-parser');
    const fs = require('fs');

    return new Promise((resolve, reject) => {

      var allFlyers = [];

      fs.createReadStream('./flyers_data.csv')
        .pipe(csv())
        .on('error', () => reject('parse error'))
        .on('data', (data) => allFlyers.push(data))
        .on('end', () => 
          {
            allFlyers = allFlyers
              .filter(flyer => flyer.is_published == 1)
              .filter(flyer => new Date(flyer.end_date) > new Date())

            if (startIndex > allFlyers.length - 1  || limitIndex > allFlyers.length - 1) 
            {
              startIndex = 0;
              limitIndex = 100;
            }

            let endIndex = startIndex + limitIndex;
            const flyers = allFlyers.slice(startIndex, endIndex);

            resolve(flyers);
          }
        ); 
    })
  }
}