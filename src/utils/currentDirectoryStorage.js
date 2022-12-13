const CurrentDirectoryStorage = {
    setCurrentDirectory(directory) {
        CurrentDirectoryStorage.currentDirectory = directory;
    },
    getCurrentDirectory() {
        return CurrentDirectoryStorage.currentDirectory;
    }
}

export { CurrentDirectoryStorage }
