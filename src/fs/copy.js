import * as fs from 'fs';
import * as path from 'path';

import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    fs.mkdir(path.join(__dirname, 'files_copy'), (error) => {
        if (error) throw new Error('FS operation failed');

        fs.readdir(path.join(__dirname, 'files'), (error, files) => {
            if (error) throw new Error('FS operation failed');
            
            files.forEach(file => {
                fs.copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files_copy', file), (error) => {
                    if (error) throw new Error('FS operation failed');
                });
            });
        });
    });
};

copy();