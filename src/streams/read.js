import * as fs from 'fs';
import * as path from 'path';
import process from 'process';

import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const readableStream = fs.createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'));
    
    readableStream.on('error', function (error) {
        readableStream.destroy();
        throw new Error(error);
    });

    readableStream.on('data', (chunk) => {
        process.stdout.write(chunk.toString());
    })
};

await read();