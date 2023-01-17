import { getAbsolutePath } from '../utils/fsHelpers.js';
import { rm as remove } from 'node:fs/promises';

const rm = async (command) => {
    const filePath = command.arguments[0];
    const absoluteFilePath = await getAbsolutePath(filePath);

    await remove(absoluteFilePath);
};

export { rm };