import { getAbsolutePath } from '../utils/fsHelpers.js';
import { writeFile } from 'node:fs/promises';

const add = async (command) => {
    const filePath = command.arguments[0];
    const absoluteFilePath = await getAbsolutePath(filePath);

    try {
        await writeFile(absoluteFilePath, '', {
            flag: 'ax'
        });
    } catch {
        throw new Error()
    }
};

export { add };