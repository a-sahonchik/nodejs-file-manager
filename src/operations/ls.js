import { currentDirectoryStorage } from '../utils/currentDirectoryStorage.js';
import { readdir } from 'node:fs/promises';

const NAME_FIELD_TITLE = 'name';
const TYPE_FIELD_TITLE = 'type';
const TYPE_FIELD_FILE_VALUE = 'file';
const TYPE_FIELD_DIRECTORY_VALUE = 'directory';

const ls = async () => {
    const currentDirectory = currentDirectoryStorage.getCurrentDirectory();

    const files = await readdir(currentDirectory, {withFileTypes: true});

    const normalizedFiles = await getNormalizedFilesInfo(files);

    console.table(normalizedFiles);
};

const getNormalizedFilesInfo = async (files) => {
    const normalizedFiles = files
        .filter(includeFilesAndDirectoriesOnly)
        .map(normalizeFileInfo)
        .sort(byNameAndType);

    return normalizedFiles;
};

const includeFilesAndDirectoriesOnly = (file) => {
    return file.isDirectory() || file.isFile();
};

const normalizeFileInfo = (file) => {
    return {
        [NAME_FIELD_TITLE]: file.name,
        [TYPE_FIELD_TITLE]: file.isFile() ? TYPE_FIELD_FILE_VALUE : TYPE_FIELD_DIRECTORY_VALUE,
    };
};

const byNameAndType = (a, b) => {
    return a.type === b.type
    ? a.name.localeCompare(b.name)
    : a.type === TYPE_FIELD_FILE_VALUE ? 1 : -1;
};

export { ls };
