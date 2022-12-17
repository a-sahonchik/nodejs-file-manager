import { currentDirectoryStorage } from '../utils/currentDirectoryStorage.js';
import { getAbsolutePath } from '../utils/fsHelpers.js';
import { assertFolderExists } from '../utils/asserts.js';

const cd = async (command) => {
    const newPath = command.arguments[0];
    const absoluteNewPath = await getAbsolutePath(newPath);

    await assertFolderExists(absoluteNewPath);

    currentDirectoryStorage.setCurrentDirectory(absoluteNewPath);
};

export { cd };
