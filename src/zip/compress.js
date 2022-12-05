import * as fs from 'fs';
import * as path from 'path';
import * as zlib from 'zlib';

import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    const readStream = fs.createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
    const writeStream = fs.createWriteStream(path.join(__dirname, 'archive.gz'));
    const compressStream = zlib.createGzip();
    readStream.pipe(compressStream).pipe(writeStream);
};

await compress();