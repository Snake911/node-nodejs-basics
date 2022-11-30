import * as crypto from 'crypto';
import { readFile } from 'fs';
import * as path from 'path';

import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {    
    readFile(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'), 'utf8', (error, data) => {
        if (error) throw new Error('FS operation failed');
        console.log(crypto.createHash('sha256').update(data).digest('hex'));
    }); 
};

await calculateHash();