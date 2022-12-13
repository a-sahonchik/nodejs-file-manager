import { lstat } from "node:fs/promises";
import { join, isAbsolute } from 'node:path';
import { CurrentDirectoryStorage } from './currentDirectoryStorage.js';

async function isFolderExists(path) {
    try {
        const filePath = await getAbsolutePath(path);
        const stat = await lstat(filePath);

        return stat.isDirectory();
    } catch {
        return false;
    }
}

async function getAbsolutePath(path) {
    const currentDirectory = CurrentDirectoryStorage.getCurrentDirectory();
    const isPathAbsolute = isAbsolute(path);
    const absolutePath = isPathAbsolute ? path : join(currentDirectory, path);

    return absolutePath;
}

export { isFolderExists, getAbsolutePath }