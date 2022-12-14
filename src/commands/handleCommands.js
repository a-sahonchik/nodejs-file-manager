import { os } from '../operations/os.js';
import { up } from '../operations/up.js';
import { ls } from '../operations/ls.js';
import { cd } from '../operations/cd.js';
import { cat } from '../operations/cat.js';
import { add } from '../operations/add.js';
import { rm } from '../operations/rm.js';
import { rn } from '../operations/rn.js';
import { hash } from '../operations/hash.js';
import { compress } from '../operations/compress.js';
import { decompress } from '../operations/decompress.js';
import {
    CLI_COMMAND_OS,
    CLI_COMMAND_UP,
    CLI_COMMAND_LS,
    CLI_COMMAND_CD,
    CLI_COMMAND_CAT,
    CLI_COMMAND_ADD,
    CLI_COMMAND_RM,
    CLI_COMMAND_RN,
    CLI_COMMAND_HASH,
    CLI_COMMAND_COMPRESS,
    CLI_COMMAND_DECOMPRESS,
} from './commands.js';

const runCommand = async (command) => {
    const commandName = command.name;

    switch (commandName) {
        case CLI_COMMAND_OS:
            await os(command);

            break;
        case CLI_COMMAND_UP:
            await up();

            break;
        case CLI_COMMAND_LS:
            await ls();

            break;
        case CLI_COMMAND_CD:
            await cd(command);

            break;
        case CLI_COMMAND_CAT:
            await cat(command);

            break;
        case CLI_COMMAND_ADD:
            await add(command);

            break;
        case CLI_COMMAND_RM:
            await rm(command);

            break;
        case CLI_COMMAND_RN:
            await rn(command);

            break;
        case CLI_COMMAND_HASH:
            await hash(command);

            break;
        case CLI_COMMAND_COMPRESS:
            await compress(command);

            break;
        case CLI_COMMAND_DECOMPRESS:
            await decompress(command);

            break;
    }
}

export { runCommand };
