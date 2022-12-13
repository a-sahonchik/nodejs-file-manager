import { os } from '../operations/os.js'
import { CLI_COMMAND_OS } from './commands.js';

const runCommand = async (command) => {
    const commandName = command.name;

    switch (commandName) {
        case CLI_COMMAND_OS:
            await os(command);

            break;
    }
}

export { runCommand };
