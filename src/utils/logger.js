import { currentDirectoryStorage } from './currentDirectoryStorage.js';

const WORKING_DIRECTORY_MESSAGE = 'You are currently in';
const INVALID_INPUT_ERROR_MESSAGE = 'Invalid input';
const OPERATION_FAILED_ERROR_MESSAGE = 'Operation failed';

const displayCurrentWorkingDir = async () => {
    console.log(WORKING_DIRECTORY_MESSAGE, currentDirectoryStorage.getCurrentDirectory());
};

const displayInvalidInputError = async () => {
    console.error(INVALID_INPUT_ERROR_MESSAGE);
};

const displayOperationFailedError = async () => {
    console.error(OPERATION_FAILED_ERROR_MESSAGE);
};

export { displayCurrentWorkingDir, displayInvalidInputError, displayOperationFailedError };