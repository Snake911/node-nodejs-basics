import * as fs from 'fs';
import * as path from 'path';

import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    fs.access(path.join(__dirname, 'files', 'properFilename.md'),  (error) => {
        if (error) {
            fs.rename(path.join(__dirname, 'files', 'wrongFilename.txt'), path.join(__dirname, 'files', 'properFilename.md'), (error) => {
                if (error) throw new Error('FS operation failed');
            });
        } else {
            throw new Error('FS operation failed');
        }        
    });    
};

await rename();