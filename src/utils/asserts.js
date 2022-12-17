import { isFileExists, isFolderExists } from './fsHelpers.js';

const assertFileExists = async (path) => {
    const fileExists = await isFileExists(path);

    if (!fileExists) {
        throw new Error();
    }
};

const assertFolderExists = async (path) => {
    const folderExists = await isFolderExists(path);

    if (!folderExists) {
        throw new Error();
    }
};

export { assertFileExists, assertFolderExists };