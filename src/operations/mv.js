import { cp } from './cp.js';
import { rm } from './rm.js';

const mv = async (command) => {
    try {
        await cp(command);

        await rm(command);
    } catch {
        throw new Error();
    }
};

export { mv };
