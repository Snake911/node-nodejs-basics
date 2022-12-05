import { readFile } from 'fs';
import * as path from 'path';

import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    readFile(path.join(__dirname, 'files', 'fileToRead.txt'), 'utf8', (error, data) => {
        if (error) throw new Error('FS operation failed');
        console.log(data);
    }); 
};

await read();