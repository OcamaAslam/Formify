const csvFilePath = 'Question.csv';
const csv = require('csvtojson');
csv()
  .fromFile(csvFilePath)
  .then((jsonObj: any) => {
    console.log(jsonObj);
    /**
     * [
     * 	{a:"1", b:"2", c:"3"},
     * 	{a:"4", b:"5". c:"6"}
     * ]
     */
  });
