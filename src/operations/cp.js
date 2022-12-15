import { createReadStream, createWriteStream } from 'node:fs';
import { basename, join } from 'node:path';
import { getAbsolutePath, isFolderExists, isFileExists } from '../utils/fsHelpers.js';

const cp = async (command) => {
    const fileToCopy = command.arguments[0];
    const absoluteFileToCopyPath = await getAbsolutePath(fileToCopy);

    await assertFileExists(absoluteFileToCopyPath);

    const copyToDirectory = command.arguments[1];
    const absoluteCopyToDirectoryPath = await getAbsolutePath(copyToDirectory);

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

        readStream.on('error', () => {
            reject(new Error());
        })
    });
};

const assertFileExists = async (path) => {
    const fileExists = await isFileExists(path);

    if (!fileExists) {
        throw new Error();
    }
}

const assertFolderExists = async (path) => {
    const folderExists = await isFolderExists(path);

    if (!folderExists) {
        throw new Error();
    }
}

export { cp };