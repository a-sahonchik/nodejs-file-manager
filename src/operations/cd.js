import { CurrentDirectoryStorage } from '../utils/currentDirectoryStorage.js';
import { getAbsolutePath, isFolderExists } from '../utils/fsHelpers.js';

const cd = async (command) => {
    const newPath = command.arguments[0];
    const absoluteNewPath = await getAbsolutePath(newPath);

    const folderExists = await isFolderExists(absoluteNewPath);

    if (folderExists) {
        CurrentDirectoryStorage.setCurrentDirectory(absoluteNewPath);
    } else {
        throw new Error();
    }
}

export { cd };
