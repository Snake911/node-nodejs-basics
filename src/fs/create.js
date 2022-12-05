import * as fs from 'fs';
import * as path from 'path';

import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    fs.writeFile(path.join(__dirname, "/files/fresh.txt"), "I am fresh and young", { flag: "wx" }, function(error) { 
        if(error) throw new Error('FS operation failed');
    });
};

await create();