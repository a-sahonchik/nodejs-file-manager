import { getAbsolutePath } from '../utils/fsHelpers.js';
import { writeFile } from 'node:fs/promises';

const add = async (command) => {
    const filePath = command.arguments[0];
    const absoluteFilePath = await getAbsolutePath(filePath);

    await writeFile(absoluteFilePath, '', {
        flag: 'ax'
    });
};

export { add };