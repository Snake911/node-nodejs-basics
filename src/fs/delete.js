import * as fs from 'fs';
import * as path from 'path';

import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    fs.rm(path.join(__dirname, 'files', 'fileToRemove.txt'), (error) => {
        if(error) throw new Error('FS operation failed');
    });
};

await remove();