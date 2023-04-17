const csvFilePath = 'hello.csv';
const jsonFilePath = 'hello.json';

const csvtojson = require('csvtojson');
const fs = require('fs/promises');

async function convertCsvToJson() {
  try {
    const jsonArray = await csvtojson('hello.csv').fromFile();
    await fs.writeFile(jsonFilePath, JSON.stringify(jsonArray));
    console.log(`Файл ${csvFilePath} успешно конвертирован в JSON и сохранен в файл ${jsonFilePath}`);
  } catch (error) {
    console.error('Произошла ошибка: ', error);
  }
}

convertCsvToJson();