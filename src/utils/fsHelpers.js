import { lstat, constants, access } from "node:fs/promises";
import { join, isAbsolute } from 'node:path';
import { currentDirectoryStorage } from './currentDirectoryStorage.js';

const isFolderExists = async (path) => {
    try {
        const filePath = await getAbsolutePath(path);
        const stat = await lstat(filePath);

        return stat.isDirectory();
    } catch {
        return false;
    }
};

const isFileExists = async (path) => {
    try {
        await access(path, constants.F_OK);

        return true;
    } catch {
        return false;
    }
};

const getAbsolutePath = async (path) => {
    const currentDirectory = currentDirectoryStorage.getCurrentDirectory();
    const isPathAbsolute = isAbsolute(path);
    const absolutePath = isPathAbsolute ? path : join(currentDirectory, path);

    return absolutePath;
};

export { isFolderExists, getAbsolutePath, isFileExists };