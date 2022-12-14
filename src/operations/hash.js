import { getAbsolutePath } from '../utils/fsHelpers.js';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const hash = async (command) => {
    const filePath = command.arguments[0];
    const absoluteFilePath = await getAbsolutePath(filePath);

    try {
        const fileContent = await readFile(absoluteFilePath, { encoding: 'utf8' });

        const hash = createHash('sha256');

        hash.update(fileContent);

        const hex = hash.digest('hex');

        console.log(hex);
    } catch {
        throw new Error();
    }
};

export { hash };