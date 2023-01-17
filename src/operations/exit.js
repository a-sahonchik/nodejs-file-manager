import { readlineInterfaceStorage } from '../utils/readlineInterfaceStorage.js';

const exit = async () => {
    readlineInterfaceStorage.getReadlineInterface().close();
};

export { exit };