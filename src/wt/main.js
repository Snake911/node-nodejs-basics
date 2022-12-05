import { Worker } from 'worker_threads';
import * as path from 'path';
import * as os from 'os';

import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
    const cpus = os.cpus();
    Promise.all(
        cpus.map(async (_, i) => {
            return new Promise((resolve, reject) => {
                new Worker(path.join(__dirname, 'worker.js'), {
                    workerData: 10 + i,
                }).on('message', value => {
                    resolve({ status: 'resolved', data: value });
                }).on('error', () => {
                    resolve({ status: 'error', data: null });
                });
            });            
        })
    ).then(res => {
        console.log(res);
    })
};

await performCalculations();