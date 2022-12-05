import * as fs from 'fs';
import * as path from 'path';
import * as zlib from 'zlib';

import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const readStream = fs.createReadStream(path.join(__dirname, 'archive.gz'));
    const writeStream = fs.createWriteStream(path.join(__dirname, 'fileToCompress.txt'));
    const decompressStream = zlib.createGunzip();
    readStream.pipe(decompressStream).pipe(writeStream);
};

await decompress();