import { join } from 'node:path';
import { currentDirectoryStorage } from '../utils/currentDirectoryStorage.js';

const up = async () => {
    const newDirectory = join(currentDirectoryStorage.getCurrentDirectory(), '..');

    currentDirectoryStorage.setCurrentDirectory(newDirectory);
};

export { up };
