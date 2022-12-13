import { lstat } from "node:fs/promises";
import { join } from 'node:path';
import { CurrentDirectoryStorage } from './currentDirectoryStorage.js';

async function isFolderExists(path) {
    try {
        const currentDirectory = CurrentDirectoryStorage.getCurrentDirectory();
        const filePath = join(currentDirectory, path);
        const stat = await lstat(filePath);

        return stat.isDirectory();
    } catch {
        return false;
    }
}

export { isFolderExists }