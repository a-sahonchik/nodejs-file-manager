import { CurrentDirectoryStorage } from '../utils/currentDirectoryStorage.js';
import { isFolderExists } from '../utils/fsHelpers.js';
import { readdir } from 'node:fs/promises';

const NAME_FIELD_TITLE = 'Name';
const TYPE_FIELD_TITLE = 'Type';
const TYPE_FIELD_FILE_VALUE = 'file';
const TYPE_FIELD_DIRECTORY_VALUE = 'directory';

const ls = async () => {
    const currentDirectory = CurrentDirectoryStorage.getCurrentDirectory();

    try {
        const files = await readdir(currentDirectory);
        const normalizedFiles = [];

        for (const file of files) {
            const folderExists = await isFolderExists(file);

            normalizedFiles.push({
                [NAME_FIELD_TITLE]: file,
                [TYPE_FIELD_TITLE]: folderExists ? TYPE_FIELD_DIRECTORY_VALUE : TYPE_FIELD_FILE_VALUE,
            });
        }

        console.table(normalizedFiles);
    } catch (err) {
        throw new Error(err);
    }
}

export { ls };
