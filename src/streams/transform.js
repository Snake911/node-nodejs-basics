import * as fs from 'fs';
import process from 'process';
import stream from 'stream';
const Transform = stream.Transform;


const transform = async () => {

    const reverseStream = new Transform({
        transform (data, encoding, callback) {
            const reversedData = data.toString().split("").reverse().join("");            
            this.push(reversedData);
            callback();
        }
    });

    process.stdin.pipe(reverseStream).on('readable', function() {        
        var chunk = reverseStream.read();
        if (chunk !== null) {
            process.stdout.write(chunk);
            process.exit();
        }
    });
};

await transform();