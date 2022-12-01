import * as fs from 'fs';
import * as path from 'path';
import process from 'process';

import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const writeStream = fs.createWriteStream(path.join(__dirname, 'files', 'fileToWrite.txt'));
    process.stdin.on('readable', function() {
        var chunk = process.stdin.read();
        if (chunk !== null) {
            writeStream.write(chunk);
        }
    });
};

await write();