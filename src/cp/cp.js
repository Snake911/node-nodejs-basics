import * as path from 'path';
import * as child_process from 'child_process';

import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    child_process.fork(path.join(__dirname, 'files', 'script.js'), process.argv);
};

spawnChildProcess();