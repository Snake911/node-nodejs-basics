import { readdir } from 'fs';
import * as path from 'path';

import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const list = async () => {
    readdir(path.join(__dirname, 'files'), (error, files) => {
        if (error) throw new Error('FS operation failed');
        
        files.forEach(file => {
            console.log(file);
        });
    }); 
};

await list();