import { cp } from './cp.js';
import { rm } from './rm.js';

const mv = async (command) => {
    await cp(command);

    await rm(command);
};

export { mv };
