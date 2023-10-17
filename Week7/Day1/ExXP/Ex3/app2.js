
import {readFile,writeFile} from "./fileManager";


const x = readFile('Hello World');

console.log(x);

writeFile('Bye World.txt', 'Writing to the file');
