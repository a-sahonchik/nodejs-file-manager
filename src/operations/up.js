import { join } from 'node:path';
import { CurrentDirectoryStorage } from '../utils/currentDirectoryStorage.js';

const up = async (command) => {
    const currentDirectory = join(CurrentDirectoryStorage.getCurrentDirectory(), '..');

    CurrentDirectoryStorage.setCurrentDirectory(currentDirectory);
}

export { up };
