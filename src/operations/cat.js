import fs from 'node:fs';
import { stdout } from 'node:process';
import { getAbsolutePath } from '../utils/fsHelpers.js';

const cat = async (command) => {
    const filePath = command.arguments[0];
    const absoluteFilePath = await getAbsolutePath(filePath);

    return new Promise((resolve, reject) => {
        const readStream = fs.createReadStream(absoluteFilePath);

        readStream.on('data', (chunk) => {
            stdout.write(chunk);
        });

        readStream.on('end', () => {
            resolve();
        });

        readStream.on('error', (err) => {
            reject(err);
        });
    });
};

export { cat };