import { Worker } from 'worker_threads';
import * as path from 'path';
import * as os from 'os';

import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
    const result = [];
    const cpusLength = os.cpus().length;
    for (let index = 0; index < cpusLength; index++) {
        new Worker(path.join(__dirname, 'worker.js'), {
            workerData: 10 + index,
        }).on('message', message => {            
            result[index] = { status: 'resolved', data: message };
            if(result.length === cpusLength && !result.includes(undefined)) {
                console.log(result);
            }
        }).on('error', () => {
            result[index] = { status: 'error', data: null };
            if(result.length === cpusLength && !result.includes(undefined)) {
                console.log(result);
            }
        });
    }
};

await performCalculations();