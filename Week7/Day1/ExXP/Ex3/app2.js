import { readFile, writeFile } from './fileManager';

// const x = readFile('Hello World');

// console.log(x);

// writeFile('Bye World.txt', 'Writing to the file');

// !!!

const inputFilePath = 'input.txt';
const outputFilePath = 'output.txt';

const content = fileManager.readFile(inputFilePath);
fileManager.writeFile(outputFilePath, content);

// !!
// file path le islemelisen
