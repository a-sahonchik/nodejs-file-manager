import os from 'node:os';

const defaultWorkingDirectory = os.homedir();

class CurrentDirectoryStorage {
    constructor() {
        this.currentDirectory = defaultWorkingDirectory;
    };

    setCurrentDirectory(directory) {
        this.currentDirectory = directory;
    };

    getCurrentDirectory() {
        return this.currentDirectory;
    };
}

const currentDirectoryStorage = new CurrentDirectoryStorage();

export { currentDirectoryStorage };
