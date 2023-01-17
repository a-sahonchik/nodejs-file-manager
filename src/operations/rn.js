import { getAbsolutePath } from '../utils/fsHelpers.js';
import { rename } from 'node:fs/promises';

const rn = async (command) => {
    const currentFileName = command.arguments[0];
    const newFileName = command.arguments[1];
    const absoluteCurrentFilePath = await getAbsolutePath(currentFileName);
    const absoluteNewFilePath = await getAbsolutePath(newFileName);

    await rename(absoluteCurrentFilePath, absoluteNewFilePath);
};

export { rn };