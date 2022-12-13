import { os } from '../operations/os.js';
import { up } from '../operations/up.js';
import {
    CLI_COMMAND_OS,
    CLI_COMMAND_UP,
} from './commands.js';

const runCommand = async (command) => {
    const commandName = command.name;

    switch (commandName) {
        case CLI_COMMAND_OS:
            await os(command);

            break;
        case CLI_COMMAND_UP:
            await up(command);

            break;
    }
}

export { runCommand };
