import { createReadStream, createWriteStream } from 'node:fs';
import { basename, join } from 'node:path';
import { getAbsolutePath } from '../utils/fsHelpers.js';
import { assertFileExists, assertFolderExists } from '../utils/asserts.js';

const cp = async (command) => {
    const fileToCopy = command.arguments[0];
    const copyToDirectory = command.arguments[1];
    const absoluteFileToCopyPath = await getAbsolutePath(fileToCopy);
    const absoluteCopyToDirectoryPath = await getAbsolutePath(copyToDirectory);

    await assertFileExists(absoluteFileToCopyPath);
    await assertFolderExists(absoluteCopyToDirectoryPath);

    const originalFileName = basename(fileToCopy);
    const absoluteCopiedFilePath = join(absoluteCopyToDirectoryPath, originalFileName);

    return new Promise((resolve, reject) => {
        const readStream = createReadStream(absoluteFileToCopyPath);
        const writeStream = createWriteStream(absoluteCopiedFilePath);

        readStream.on('data', (chunk) => {
            writeStream.write(chunk);
        });

        readStream.on('end', () => {
            resolve();
        });

        readStream.on('error', (err) => {
            reject(err);
        })
    });
};

export { cp };