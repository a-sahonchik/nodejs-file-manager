import { sayHiToUser, sayByeToUser } from "./greeter.js";
import os from 'os';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { parseCommandFromInput } from './commands/parseCommands.js';
import { isCommandValid } from './commands/validateCommands.js';
import { runCommand } from './commands/handleCommands.js';
import { CLI_COMMAND_EXIT } from './commands/commands.js';
import { CurrentDirectoryStorage } from './utils/currentDirectoryStorage.js';

const WORKING_DIRECTORY_MESSAGE = 'You are currently in';
const INVALID_INPUT_MESSAGE = 'Invalid input';
const OPERATION_FAILED_MESSAGE = 'Operation failed';

await sayHiToUser();

CurrentDirectoryStorage.setCurrentDirectory(os.homedir());

console.log(WORKING_DIRECTORY_MESSAGE, CurrentDirectoryStorage.getCurrentDirectory());

const rl = readline.createInterface({ input, output });

rl.prompt();

rl.on('line', async (input) => {
    const trimmedInput = input.trim();

    if (trimmedInput === CLI_COMMAND_EXIT) {
        rl.close();
    } else {
        const command = await parseCommandFromInput(trimmedInput);

        const isCommandCallHasAnyErrors = !(await isCommandValid(command));

        if (isCommandCallHasAnyErrors) {
            console.log(INVALID_INPUT_MESSAGE);
        } else {
            try {
                await runCommand(command);
            } catch {
                console.error(OPERATION_FAILED_MESSAGE);
            }
        }

        console.log(WORKING_DIRECTORY_MESSAGE, CurrentDirectoryStorage.getCurrentDirectory());

        rl.prompt();
    }
});

rl.on('SIGINT', () => {
    rl.close();
});

rl.on('close', async () => {
    await sayByeToUser();

    process.exit(0);
});
