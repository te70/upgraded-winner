const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const csvToJson = require('convert-csv-to-json');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const fileInputName = 'hng_sheet.csv';
const fileOutputName = 'hng.json';

csvToJson.parseSubArray('*', ',').generateJsonFileFromCsv(fileInputName, fileOutputName);

const fileJson = JSON.parse(fileOutputName);

Object.entries(fileJson).forEach((entry) => {
  const [key, value] = entry;
  console.log(`${key}: ${value}`);
});

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});
